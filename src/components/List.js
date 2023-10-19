import React, { useState } from 'react'
import { Carousel, List, Pagination } from 'antd'
const data = [
  {
    date: '2023-10-17',
    sentence: '今天是个好日子。',
  },
  {
    date: '2023-10-16',
    sentence: '昨天的努力是今天的成果。',
  },
  {
    date: '2023-10-15',
    sentence: '不积跬步，无以至千里。',
  },
  {
    date: '2023-10-17',
    sentence: '今天是个好日子。',
  },
  {
    date: '2023-10-16',
    sentence: '昨天的努力是今天的成果。',
  },
  {
    date: '2023-10-15',
    sentence: '不积跬步，无以至千里。',
  }, {
    date: '2023-10-17',
    sentence: '今天是个好日子。',
  },
  {
    date: '2023-10-16',
    sentence: '昨天的努力是今天的成果。',
  },
  {
    date: '2023-10-15',
    sentence: '不积跬步，无以至千里。',
  }, {
    date: '2023-10-17',
    sentence: '今天是个好日子。',
  },
  {
    date: '2023-10-16',
    sentence: '昨天的努力是今天的成果。',
  },
  {
    date: '2023-10-15',
    title: '0000',
    sentence: '不积跬步，无以至千里。',
  }, {
    date: '2023-10-17',
    sentence: '今天是个好日子。',
  },
  {
    date: '2023-10-16',
    sentence: '昨天的努力是今天的成果。',
  },
  {
    date: '2023-10-15',
    sentence: '不积跬步，无以至千里。',
  },
  // 添加更多的数据
]
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month}/${day} ${year}`
}
const pageSize = 10
const DayList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePage = page => {
    setCurrentPage(page)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2>每日一智句</h2>
      </div>
      <div style={{ width: '100%' }}>
        <List
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'right', width: '25%' }}>{formatDate(item.date)}</div>
              <div style={{ flex: 1, marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '8px' }}>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <p>{item.content}</p>
                </div>
              </div>
            </List.Item>)}
        />
      </div>
      <Pagination
        style={{ marginTop: '16px' }}
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={onChangePage}
      />
    </div>
  )
}

export default DayList