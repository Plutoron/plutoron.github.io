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
      const array = fileName.split('-')
      return {
        time: array[0],
        title: array.slice(1).join('-').replace('.md', ''),
        fileName,
      }
    })

    jsonfile.writeFile(
      `${process.cwd()}/src/info.json`, 
      {
        total: fileInfoArray.length,
        markdown: fileInfoArray.reverse(),
      }, 
      { spaces: 2 }, 
      err => {
        if (err) {
          throw new Error(err)
        }

        console.log('Successed!!!')
      }
    )
  })
}

getFileInfos()
