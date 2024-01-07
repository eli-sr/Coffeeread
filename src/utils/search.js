export default function search (sentencesArray, targetString) {
  const posArray = []
  if (sentencesArray.length < 1) { return posArray }
  sentencesArray.forEach((sentence, index) => {
    const res = sentence.indexOf(targetString)
    if (res === -1) return
    posArray.push(index)
  })
  return posArray
}
