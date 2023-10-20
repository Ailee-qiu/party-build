import React, { useState } from 'react'
import { Table, Space } from 'antd'

import dataFile from '../common/constant'
const { Column } = Table

const OnlionLearning = () => {



  return (
    <div style={{ height: '100vh' }}>
      <Table dataSource={dataFile} pagination={false} >
        <Column title="文件名" dataIndex="fileName" key="fileName" />
        <Column title="文件类型" dataIndex="fileType" key="fileType" />
        <Column title="作者" dataIndex="author" key="author" />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <Space >
              <a href={record.url} target="_blank" rel="noopener noreferrer">
                预览
              </a>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

export default OnlionLearning