import React from 'react'

const HTMLPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="http://localhost:3000/智慧小区/index.html" // 替换为您的 HTML 页面的路径
        title="HTML Page"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  )
}

export default HTMLPage