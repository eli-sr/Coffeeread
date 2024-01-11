const LinesPerPage = 35

function pos2Page (posNum) {
  return Math.ceil((posNum + 1) / LinesPerPage)
}

function page2Pos (pageNum) {
  return (pageNum - 1) * LinesPerPage
}

function getLocalSentences () {
  const data = localStorage.getItem('sentences')
  return JSON.parse(data)
}

function setLocalSentences (sentences) {
  const data = JSON.stringify(sentences)
  localStorage.setItem('sentences', data)
}

export { pos2Page, page2Pos, getLocalSentences, setLocalSentences }
