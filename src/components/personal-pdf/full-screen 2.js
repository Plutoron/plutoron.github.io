import { useEffect, useState, useRef } from 'react'

import { Icon, Input, Button, Spin } from 'antd'

import * as pdfWorker from 'pdfjs-dist/build/pdf.worker'
import * as pdfjsViewer from 'pdfjs-dist/web/pdf_viewer'

import PDFJS from 'pdfjs-dist'

import './full-screen.css'

const ActionBar = ({ store, openFullscreen }) => {
    const [scale, setScale] = useState(1)

    return (
        <div
            className="pdf-reader-fullscreen-toolbar FBH pl16 pr16"
            style={{ marginLeft: 120, marginRight: 120 }}
        >
            <div className="pdf-reader-fullscreen-toolbar-action FBH FBAC">
                {/* <Icon
                    className="mr8"
                    style={{ fontSize: 16 }}
                    type="fullscreen"
                    onClick={() => {
                        console.log('toolbar openFullscreen')
                        openFullscreen && openFullscreen()
                    }}
                /> */}
                <Icon
                    onClick={() => {
                        if (scale === 1.4) return

                        const _scale = Number((scale + 0.1).toFixed(1))
                        store.container.style.transform = `scale(${_scale})`
                        setScale(_scale)
                    }}
                    className={`mr8${scale === 1.4 ? ' action-disable' : ''}`}
                    style={{ fontSize: 16 }}
                    type="zoom-in"
                />
                <Icon
                    onClick={() => {
                        if (scale === 0.6) return

                        const _scale = Number((scale - 0.1).toFixed(1))
                        store.container.style.transform = `scale(${_scale})`
                        setScale(_scale)
                    }}
                    className={`${scale === 0.6 ? 'action-disable' : ''}`}
                    style={{ fontSize: 16 }}
                    type="zoom-out"
                />
            </div>
            <div className="pdf-reader-toolbar-quick-jumper FB1 FBH FBAC FBJC">
                <span className="mr8 ml8"> {'<'} </span>
                <Input
                    style={{ width: 45, height: 25, lineHeight: '25px' }}
                    onPressEnter={({ target: { value } }) => {
                        // 通过 id 获取到 canvas 实例
                        // const _page = document.querySelector(`#page${value}`)
                        // _page && _page.scrollIntoView()
                        Array.from(store.pages).some(node => {
                            if (
                                node.getAttribute('data-page-number') === value
                            ) {
                                node.scrollIntoView()
                            }

                            return (
                                node.getAttribute('data-page-number') === value
                            )
                        })
                    }}
                />
                <span className="mr8 ml8">/</span>
                <span>{store.numPages}</span>
                <span className="mr8 ml8"> {'>'} </span>
            </div>
            <div className="pdf-reader-toolbar-end FBH FBAC">
                {/* <Button type="primary" onClick={() => window.open(test)}>
                    下载
                </Button> */}
            </div>
        </div>
    )
}

const PDFViewer = ({ store, fileUrl, loaded }) => {
    useEffect(() => {
        store.container = document.getElementById('pdf-full-screen-reader-wrap')
        store.viewer = document.getElementById('pdf-full-screen-viewer')

        PDFJS.GlobalWorkerOptions.workerSrc = pdfWorker

        PDFJS.getDocument({
            url: fileUrl,
            cMapUrl: __DEV__
                ? '../../../node_modules/pdfjs-dist/cmaps/'
                : 'cmaps/',
            cMapPacked: true
        }).then(pdf => {
            store.numPages = pdf.numPages
            store.eventBus = new pdfjsViewer.EventBus()

            store.pdfViewer = new pdfjsViewer.PDFViewer({
                container: store.container,
                viewer: store.viewer,
                eventBus: store.eventBus,
                enableWebGL: true,
                disableFullscreen: true,
                textLayerMode: 0,
                removePageBorders: true
            })

            store.eventBus.on('pagesinit', function() {
                store.pdfViewer.currentScaleValue = 'page-width'
                store.pages = document.querySelectorAll(
                    '#pdf-full-scrren-view .page'
                )
          
                loaded && loaded()
            })

            store.pdfViewer.setDocument(pdf)
        })
    }, [])

    return (
        // 减 16 是因为 滚动条 还有 pdfjs canvas 渲染 多了 1px
        <div
            id="pdf-full-screen-reader-wrap"
            style={{ width: store.content.clientWidth - 16 }}
        >
            <div
                id="pdf-full-scrren-view"
                style={{ width: store.content.clientWidth - 16 }}
            ></div>
        </div>
    )
}

const FullscreenPDFViewer = ({
    fileName,
    fileUrl,
    fileLink,
    visible,
    exitFullscreen
}) => {
    const [showLoading, setShowLoading] = useState(true)
    const [didMount, setDidMount] = useState(false)

    const { current: store } = useRef({
        document: undefined,
        wrap: undefined,
        numPages: undefined
    })

    useEffect(() => {
        setDidMount(true)
    }, [])

    return (
        <div
            className="pdf-reader-fullscreen-wrap FBV"
            style={{
                width: window.innerWidth,
                height: window.innerHeight,
                visibility: visible ? 'visible' : 'hidden'
            }}
        >
            <div
                className="pdf-reader-fullscreen-header FBH FBJB FBAC w100"
                style={{
                    height: 45,
                    minHeight: 45,
                    width: '100%',
                    paddingLeft: 120,
                    paddingRight: 120
                }}
            >
                <span>{fileName}</span>

                <Icon
                    className="mr8"
                    style={{ fontSize: 16 }}
                    type="fullscreen-exit"
                    onClick={() => exitFullscreen && exitFullscreen()}
                />
            </div>

            <div
                className="FB1"
                style={{
                    marginLeft: 120,
                    marginRight: 120,
                    overflow: 'auto',
                    backgroundColor: '#fff'
                }}
                ref={ref => (store.content = ref)}
            >
                {
                     showLoading && <div className="tac w100 mt8 mb8">
                        <Spin spinning size="small" />
                    </div>
                }
                {
                    didMount && (
                        <PDFViewer
                            store={store}
                            fileUrl={fileUrl}
                            loaded={() => setShowLoading(false)}
                        />
                    )
                }
            </div>

            {!showLoading && (
                <ActionBar store={store} />
            )}
        </div>
    )
}

export default FullscreenPDFViewer
