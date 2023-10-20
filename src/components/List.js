import React, { useState } from 'react'
import { Carousel, List, Pagination } from 'antd'
import dateData from '../common/date'
const DayList = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      <div>
        <img src="http://news.cnr.cn/mryxh/images/banner.jpg" alt="pic1" style={{ width: '100%' }} />
      </div>
      <div style={{ width: '100%', backgroundColor: 'rgb(243, 240, 240)' }}>
        <List
          bordered
          dataSource={dateData}
          renderItem={item => (
            <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'right', width: '15%' }}>
                <div style={{ marginBottom: '8px' }}>
                  <h2>{item.date}</h2>
                </div>
                <div>
                  <p>{item.year}</p>
                </div>
              </div>
              <div style={{ flex: 1, marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
                <div>
                  <p>{item.content}</p>
                </div>
              </div>
            </List.Item>)}
        />
      </div>
    </div>
  )
}

export default DayList