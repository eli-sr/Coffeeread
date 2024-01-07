const LinesPerPage = 35

function pos2Page (posNum) {
  return Math.ceil((posNum + 1) / LinesPerPage)
}

function page2Pos (pageNum) {
  return (pageNum - 1) * LinesPerPage
}

export { pos2Page, page2Pos }
