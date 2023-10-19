import React from 'react'
import { FileViewer } from 'react-file-viewer'

const filePath = 'path-to-your-file' // 替换为你的文件路径
const type = 'file-type' // 替换为你的文件类型
const OnlionLearning = () => {
  return (
    <div style={{ height: '100vh' }}>
      <FileViewer
        fileType={type}
        filePath={filePath}
        onError={e => console.log(e)}
      />
    </div>
  )
}

export default OnlionLearning