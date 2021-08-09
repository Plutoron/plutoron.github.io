import * as React from 'react'
import './miss-evan.styl'

import music from 'images/music.svg'

const AlbumCover = ({
  title,
  subtitle,
  coverImg,
  athor,
  songNumber
}) => {
  return (
    <div className="album-cover">
      <div className="album-cover-top">
        <div className="top-cover">
          <div className="top-cover top"></div>
          <div className="top-cover mid"></div>
          <div className="top-cover bottom"></div>
        </div>
        <div className="song-number">
          <img src={music} />
          <span>{songNumber}</span>
        </div>
      </div>
      <div className="album-cover-bottom">
        <div className="album-title">{title}{subtitle}</div>
        <div className="album-athor">{athor}</div>
      </div>
    </div>
  )
}

const MissEvan = ({children}) => {
  return <>
    <div 
      className="content pt16"
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      <AlbumCover />
    </div>
  </>
}

export default MissEvan
