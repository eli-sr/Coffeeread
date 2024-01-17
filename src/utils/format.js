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
  if (index - 1 < 0) return false
  return !isNaN(text[index - 1])
}

function findNextDotFrom (text, index) {
  if (index + 1 >= text.length) return index
  for (let i = index + 1; i < text.length; i++) {
    if (text[i] === '.') return i
  }
  return text.length - 1
}

export default function format (text) {
  const sentences = []
  const trimText = text.trim()
  if (trimText.length === 0) return sentences
  let restText = trimText
  let nextDot = restText.indexOf('.')
  let line
  if (nextDot === -1) {
    const line = removeBadChars(restText)
    sentences.push(line)
  }
  while (nextDot !== -1) {
    while (isSectionDot(restText, nextDot)) {
      if (restText.length - 1 === nextDot) break
      nextDot = findNextDotFrom(restText, nextDot)
    }
    line = restText.slice(0, nextDot + 1)
    line = removeBadChars(line)
    sentences.push(line)
    restText = restText.slice(nextDot + 1)
    restText = restText.trim()
    nextDot = restText.indexOf('.')
  }
  return sentences
}
