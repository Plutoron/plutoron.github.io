import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import PersonalPdf from '../personal-pdf' 
import test from './test.pdf'

const ReactPDF = () => {
  const [domLoading, setDmgLoading] = useState(true)
  const {current: store} = useRef({
    pdfDom: null
  })

  useEffect(() => {
    setDmgLoading(false)
  }, [])

  return <div ref={ref => store.pdfDom = ref}>
    {
      domLoading 
        ? <div className="tac w100 mt24"><Spin wrapperClassName="w100 tac" size="small" spinning={domLoading} /></div>
        : <PersonalPdf 
          containner={store.pdfDom} 
          fileName={'test'} 
          fileUrl={test} 
          // fileLink={file.previewUrl} 
        />
    }
  </div>
}

export default ReactPDF
