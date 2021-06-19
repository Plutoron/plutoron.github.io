import { useEffect, useState, useRef, Fragment } from 'react'

import { Icon, Input, Button, Spin } from 'antd'

import * as pdfWorker from 'pdfjs-dist/build/pdf.worker'
import * as pdfjsViewer from 'pdfjs-dist/web/pdf_viewer'

import PDFJS from 'pdfjs-dist'

import Fullscreen from './full-screen'

import './react-pdf.css'

const ActionBar = ({ fileName, store, fileLink, openFullscreen }) => {
    const [scale, setScale] = useState(1)

    return (
        <div className="pdf-reader-toolbar FBH pl16 pr16">
            <div className="pdf-reader-toolbar-action FBH FBAC">
                <Icon
                    className="mr8"
                    style={{ fontSize: 16 }}
                    type="fullscreen"
                    onClick={() => {
                        console.log('toolbar openFullscreen')
                        openFullscreen && openFullscreen()
                    }}
                />
                <Icon
                    onClick={() => {
                        if (scale === 1.4) return

                        // 用组件的 scale 卡
                        // const _scale = store.pdfViewer.currentScale + 0.1
                        // // 重置 view 实例 的 scale
                        // store.pdfViewer.currentScale = Number(_scale)
                        // setScale(scale + 1)

                        const _scale =  Number((scale + 0.1).toFixed(1))
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

                        // const _scale = store.pdfViewer.currentScale - 0.1

                        // // 重置 view 实例 的 scale
                        // store.pdfViewer.currentScale = Number(_scale)
                        
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

                        // 因为 全屏的时候会有两个 相同id 的 canvas
                        Array.from(store.pages).some(node => {
                            if (node.getAttribute('data-page-number') === value) {
                                node.scrollIntoView()
                            }

                            return node.getAttribute('data-page-number') === value
                        })
                    }}
                />
                <span className="mr8 ml8">/</span>
                <span>{store.numPages}</span>
                <span className="mr8 ml8"> {'>'} </span>
            </div>
            <div className="pdf-reader-toolbar-end FBH FBAC">
                <Button 
                    type="primary" 
                    onClick={() => {
                        const link = document.createElement('a')
                        //设置下载的文件名
                        link.download = fileName
                        link.style.display = 'none'
                        //设置下载路径
                        link.href = fileLink
                        //触发点击
                        document.body.appendChild(link)
                        link.click()
                        //移除节点
                        document.body.removeChild(link)
                    }}
                >
                    下载
                </Button>
            </div>
        </div>
    )
}

const PDFViewer = ({ fileName, fileUrl, fileLink, containner, openFullscreen }) => {
    const [showLoading, setShowLoading] = useState(true)

    const { current: store } = useRef({
        document: undefined,
        wrap: undefined,
        numPages: undefined
    })

    useEffect(() => {
        store.container = document.getElementById('pdf-reader-wrap')
        store.viewer = document.getElementById('pdf-viewer')

        PDFJS.GlobalWorkerOptions.workerSrc = pdfWorker

        PDFJS.getDocument({
            url: fileUrl,
            cMapUrl: __DEV__ ? '../../../node_modules/pdfjs-dist/cmaps/' : 'cmaps/',
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
                store.pdfViewer.currentScaleValue = 'page-fit'
                store.pages = document.querySelectorAll('#pdf-view .page')
                setShowLoading(false)
            })

            store.pdfViewer.setDocument(pdf)
        })
    }, [])

    return (
        <Fragment>
            <div className="pr">
                <div
                    style={{
                        width: containner.clientWidth,
                        maxHeight: (containner.clientWidth / 210) * 297,
                        overflow: 'auto'
                    }}
                >
                    <div
                        id="pdf-reader-wrap"
                        style={{ width: containner.clientWidth - 17 }}
                    >
                        <div
                            id="pdf-view"
                            style={{ width: containner.clientWidth - 17 }}
                        ></div>
                    </div>
                </div>

                {showLoading ? (
                    <div className="tac w100 mt8 mb8">
                        <Spin spinning size="small" />
                    </div>
                ) : (
                    <ActionBar fileName={fileName} store={store} fileLink={fileLink} openFullscreen={openFullscreen} />
                )}
            </div>

        </Fragment>
    )
}

const PeronalPDF = ({ fileName, fileUrl, fileLink, containner }) => {
    const [fullscreenMode, setFullscreenMode] = useState(false)

    return <Fragment>
        <PDFViewer 
            fileName={fileName}
            fileUrl={fileUrl}
            fileLink={fileLink}
            containner={containner}
            openFullscreen={() => setFullscreenMode(true)}
        />

        <Fullscreen 
            visible={fullscreenMode} 
            fileName={fileName}
            fileUrl={fileUrl}
            fileLink={fileLink}
            exitFullscreen={() => setFullscreenMode(false)}
        />
    </Fragment>
}

export default PeronalPDF
