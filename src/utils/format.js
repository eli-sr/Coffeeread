export default function format (text) {
  const sentences = []
  const trimText = text.trim()
  if (trimText.length === 0) return sentences
  let restText = trimText
  let nextDot = restText.indexOf('.')
  while (nextDot !== -1) {
    sentences.push(restText.slice(0, nextDot + 1))
    restText = restText.slice(nextDot + 1)
    restText = restText.trim()
    nextDot = restText.indexOf('.')
  }
  return sentences
}
