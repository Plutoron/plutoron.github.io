import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf'

import test from './test.pdf'

const ReactPDF = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [numPages, setNumPages] = useState(1)


  return <div>
    <Document
      file={test}
      onLoadSuccess={({ numPages }) => {
        console.log(numPages)

        setNumPages(numPages)
      }}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
    <a onClick={() => setPageNumber(pageNumber + 1)}>+1</a> <a onClick={() => setPageNumber(pageNumber - 1)}>-1</a>
  </div>
}

export default ReactPDF
