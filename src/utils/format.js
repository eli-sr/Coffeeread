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

export default function format (text) {
  const sentences = []
  const trimText = text.trim()
  if (trimText.length === 0) return sentences
  let restText = trimText
  let nextDot = restText.indexOf('.')
  while (nextDot !== -1) {
    let line = restText.slice(0, nextDot + 1)
    line = removeBadChars(line)
    sentences.push(line)
    restText = restText.slice(nextDot + 1)
    restText = restText.trim()
    nextDot = restText.indexOf('.')
  }
  return sentences
}
