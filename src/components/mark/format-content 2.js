import React, {useState, useRef} from 'react'
import docs from './docs.json'
import labels from './labels.json'

// {
//     "id": 5,
//     "text": "MISC",
//     "prefix_key": null,
//     "suffix_key": "m",
//     "background_color": "#fbb028",
//     "text_color": "#000000"
// },

const FormatContent = ({text}) => {
    const domRef = useRef()

    const id2label = () => {
        const id2label = {};
        // default value;
        id2label[-1] = {
          text_color: '',
          background_color: '',
        };
        for (let i = 0; i < labels.length; i++) {
          const label = labels[i];
          id2label[label.id] = label;
        }
        return id2label;
    }

    const textPart = (r) => {
      return [...text].slice(r.start_offset, r.end_offset).join('');
    }

    const getSearchHighlightedChunks = (text) => {
        if (this.searchQuery) {
          const chunks = [];
          let currentText = text;
          let nextIndex;
  
          do {
            nextIndex = currentText.toLowerCase().indexOf(this.searchQuery.toLowerCase());
  
            if (nextIndex !== -1) {
              chunks.push({
                content: currentText.substring(0, nextIndex),
                highlight: false,
              });
              chunks.push({
                content: currentText.substring(nextIndex, nextIndex + this.searchQuery.length),
                highlight: true,
              });
              nextIndex += this.searchQuery.length;
              currentText = currentText.substring(nextIndex);
            } else {
              chunks.push({
                content: currentText.substring(nextIndex),
                highlight: false,
              });
            }
          } while (nextIndex !== -1);
  
          return chunks.filter(({ content }) => content);
        }
  
        return [{ content: text, highlight: false }];
    }
  
    const setSelectedRange = (e) => {
        let start;
        let end;
        if (window.getSelection) {
          const range = window.getSelection().getRangeAt(0);
          const preSelectionRange = range.cloneRange();
          preSelectionRange.selectNodeContents(domRef.current);
          preSelectionRange.setEnd(range.startContainer, range.startOffset);
          start = preSelectionRange.toString().length;
          end = start + range.toString().length;
        } else if (document.selection && document.selection.type !== 'Control') {
          const selectedTextRange = document.selection.createRange();
          const preSelectionTextRange = document.body.createTextRange();
          preSelectionTextRange.moveToElementText(domRef.current);
          preSelectionTextRange.setEndPoint('EndToStart', selectedTextRange);
          start = preSelectionTextRange.text.length;
          end = start + selectedTextRange.text.length;
        }
        // this.startOffset = start;
        // this.endOffset = end;
        console.log(start, end);
    }

      console.log(domRef)

    return <>
        <div onClick={setSelectedRange} className="FBH mb16" ref={domRef}>
           {text}
        </div> 
    </>
}
export default FormatContent
