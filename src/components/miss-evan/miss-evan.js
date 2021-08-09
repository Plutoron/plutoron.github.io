import * as React from 'react'
import AlbumCover from './album-cover'
import "common/github-markdown.css"

const MissEvan = () => {
  return <>
    <div 
      className="content pt16"
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      <div className="FBH FBJA">
        <AlbumCover 
          title="M站ACG"
          subtitle="音乐榜"
          songNumber={10}
          author="猫耳FM"
          coverImg="https://static.missevan.com/coversmini/201705/24/567f9fa82428860956c0a2a23f275d8d162509.png"
        />

        <AlbumCover 
          title="M站ACGM站ACGM站ACGM站ACGM站ACG"
          subtitle="音乐榜"
          songNumber={10}
          author="猫耳FM"
          coverImg="https://static.missevan.com/coversmini/201705/24/567f9fa82428860956c0a2a23f275d8d162509.png"
        />

        <AlbumCover 
          title="M站ACG"
          subtitle="音乐榜"
          songNumber={10}
          author="猫耳FM"
          themeColor="#F7D077"
        />
      </div>

      <article 
        className="markdown-body mt20 mb20"
        dangerouslySetInnerHTML={{
          __html: require(`./show.md`),
        }}
      />
    </div>
  </>
}

// FCECAF
// F7D077
export default MissEvan
