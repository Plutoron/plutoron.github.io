import * as React from 'react'
import './album-cover.styl'

import music from 'images/music.svg'

const AlbumCover = ({
  coverId,
  title,
  subtitle,
  coverImg,
  songNumber,
  themeColor,
  author,
  authorId
}) => {
  const renderTheme = () => {
    return <>
      <div className="theme-cover" style={{ backgroundColor: themeColor }}>
        <div className="mask" />
        <div className="text-wrap">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </div>
    </>
  }

  return (
    <div className="album-cover">
      <a className="album-cover-top" href={`/cover/${coverId}`}>
        <div className="cover-top">
          <div className="top-cover-wrap">
            <div className="top-cover top">
              { coverImg && <img src={coverImg} /> }

              { themeColor && renderTheme() }
            </div>
            <div className="top-cover mid"></div>
            <div className="top-cover bottom"></div>
          </div>
          <div className="song-number">
            <img className="music-icon" src={music} />
            <span>{songNumber}</span>
          </div>
        </div>

        <div className="album-title omit" title={`${title}${subtitle}`}>{title}{subtitle}</div>
      </a>

      <a className="album-author omit" href={`/author/${authorId}`} title={author}>{author}</a>
    </div>
  )
}

export default AlbumCover
