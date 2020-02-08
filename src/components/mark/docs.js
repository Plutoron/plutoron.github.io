import React, {useState, useRef} from 'react'
import docs from './docs.json'
import FormatContent from './format-content'

// {
//     "id": 5,
//     "text": "MISC",
//     "prefix_key": null,
//     "suffix_key": "m",
//     "background_color": "#fbb028",
//     "text_color": "#000000"
// },

const Docs = () => {
    return <>
        <div className="FBH">
            <div style={{width: 250}}>
                <div>标题区</div>
                {
                    docs.results.map(v => {
                        return <div
                            className="omit omit2 mb8"
                        >
                            <span>{v.text}</span>
                        </div> 
                    })
                }
            </div>

            <div>
                <div>内容区</div>
                {
                    docs.results.map(v => {
                        return  <FormatContent text={v.text} />
                    })
                }
            </div>
        </div> 
    </>
}
export default Docs