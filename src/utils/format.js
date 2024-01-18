function removeBadChars (line) {
  let newLine
  if (line.indexOf('-\n') !== -1) {
    newLine = line.replace('-\n', '')
    return removeBadChars(newLine)
  }
  if (line.indexOf('\n') !== -1) {
    newLine = line.replace('\n', ' ')
    return removeBadChars(newLine)
  }
  return line
}

function isSectionDot (text, index) {
  if (index - 1 < 0 || text.length - 1 === index) return false
  return !isNaN(text[index - 1])
}

function findNextDotFrom (text, index) {
  if (index + 1 >= text.length) return index
  for (let i = index + 1; i < text.length; i++) {
    if (text[i] === '.') return i
  }
  return text.length - 1
}

function isValidIndex (index) {
  return index >= 0
}

function getLine (text, lastIndex) {
  return removeBadChars(text.slice(0, lastIndex + 1))
}

function getRestText (text, firstIndex) {
  return text.slice(firstIndex).trim()
}

export default function format (text) {
  const sentences = []
  const trimmedText = text.trim()
  if (trimmedText.length === 0) return sentences

  let restText = trimmedText
  let nextDot = restText.indexOf('.')
  let line

  if (!isValidIndex(nextDot)) {
    line = getLine(restText, restText.length - 1)
    sentences.push(line)
  }

  while (isValidIndex(nextDot)) {
    while (isSectionDot(restText, nextDot)) {
      nextDot = findNextDotFrom(restText, nextDot)
    }
    line = getLine(restText, nextDot)
    sentences.push(line)
    restText = getRestText(restText, nextDot + 1)
    nextDot = restText.indexOf('.')
  }
  return sentences
}
