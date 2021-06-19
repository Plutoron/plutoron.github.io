import React, {useState, useRef} from 'react'
import labels from './labels.json'

// {
//     "id": 5,
//     "text": "MISC",
//     "prefix_key": null,
//     "suffix_key": "m",
//     "background_color": "#fbb028",
//     "text_color": "#000000"
// },

const Labels = () => {
    return <>
        {
            labels.map(v => {
               return <div
                    style={{
                        display: 'inline-block',
                        backgroundColor: v.background_color,
                        color: v.text_color,
                        padding: '10px 8px'
                    }}
                >
                   <span>{v.text}</span>
                   <span >{v.suffix_key}</span>
               </div> 
            })
        }
    </>
}
export default Labels