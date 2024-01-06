const LinesPerPage = 35

function line2Page (lineNum) {
  return Math.ceil(lineNum / LinesPerPage)
}

function page2Line (pageNum) {
  return (pageNum - 1) * LinesPerPage + 1
}

export { line2Page, page2Line }
