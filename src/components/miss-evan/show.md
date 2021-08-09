#### 目录结构
  - album-cover.js
  - album-cover.styl

##### album-cover.js
```
import * as React from 'react'
import './album-cover.styl'

import music from 'images/music.svg'

// 扩展了一下。有 coverImg 封面图的时候，默认显示封面图
// 没有封面图 根据 title subtitle themeColor 主题色 展示
// 这样就要 开发人员 确定 封面图 或者 themeColor 主题色 必传了
// 都不传的时候 可以自己写个 颜色池 随机获取一种颜色 作为主题色

const AlbumCover = ({
  albumId, // 专辑id
  title, // 专辑 标题
  subtitle, // 专辑小标题
  coverImg, // 专辑封面图
  songNumber, // 歌曲数量
  themeColor, // 主题色 无 封面图时 根据该颜色 生成默认专辑图
  author, // 作者
  authorId // 作者id
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
      <a className="album-cover-top" href={`/album/${albumId}`}>
        <div className="cover-top">
          <div className="top-cover-wrap">
            <div className="top-cover top">
              { coverImg && <img src={coverImg} /> }

              { !coverImg && themeColor && renderTheme() }
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
```
##### album-cover.styl
```
.album-cover 
  width 160px
  .album-cover-top 
    .cover-top
      position relative

      .top-cover-wrap
        height 160px

        .top-cover
          width 100%
          height 100%
          border 1px solid #bdbdbd
          border-radius 5px
          position absolute
          background-color #fff
          top 0 
          left 0
          overflow hidden

          &.top 
            z-index 3

            img 
              width 100%
              height 100%

            .theme-cover
              height 100%
              width 100%
              display flex
              align-items center  
              justify-content flex-end
              position relative

              .mask 
                position absolute
                top 0
                left 0
                width 100%
                height 100%
                background linear-gradient(to bottom, rgba(255, 255, 255, .4), transparent)

              .text-wrap
                text-align end
                color #fff
                padding-right 10px
                margin-top -16px
                
                .title
                  font-size 26px
                  line-height 26px
                  font-weight 500
                  margin-bottom 6px

                .subtitle
                  margin-top 6px
                  font-size 30px
                  line-height 30px
                  font-weight 500

          &.mid 
            top -3px
            left 3px
            z-index 2

          &.bottom 
            top -6px
            left 6px
        
      .song-number
        position absolute
        bottom 0
        left 0
        width 100%
        height 20px
        padding-right 10px
        background linear-gradient(to right, transparent, rgba(0, 0, 0, .02) 30%, #000)
        z-index 3
        border-bottom-right-radius 5px
        display flex
        align-items center
        justify-content flex-end
        color #fff

        .music-icon 
          height 12px
          width 12px
        
        span 
          margin-left 4px

    .album-title 
      margin-top 4px
      margin-right 4px
      margin-left 4px
      font-size 14px
      color #000

  .album-author
    margin-top 6px
    margin-right 4px
    margin-left 4px
    color #9e9e9e

.omit 
  display block
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
```