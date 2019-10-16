const fs = require('fs-extra')
const jsonfile = require('jsonfile')

const path = process.argv.slice(2)

const getFileInfos = () => {
  if (path.length === 0) {
    throw new Error('请输入 路径信息')
  }

  fs.readdir(`${process.cwd()}/${path}`, (err, dir) => {
    if (err && err.code !== 'ENOENT') {
      throw new Error(`读取/${path}目录失败`)
    }

    const fileInfoArray = dir.map(fileName => {
      return {
        time: fileName.split('-')[0],
        title: fileName.split('-')[1].replace('.md', ''),
        fileName,
      }
    })

    jsonfile.writeFile(
      `${process.cwd()}/src/info.json`, 
      {
        info: JSON.stringify(fileInfoArray),
      }, 
      { spaces: 2 }, 
      err => {
        if (err) console.error(err)
        console.log('success????')
      }
    )
  })
}

getFileInfos()
