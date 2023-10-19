import React from 'react'
import { Menu, Carousel, List } from 'antd'
const Banner = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div >
          <p>左边展示的语句</p>
        </div>
        <div style={{ width: 800, margin: 'auto' }}>
          <Carousel autoplay>
            <div>
              <img src="http://news.cnr.cn/mryxh/images/banner.jpg" alt="pic1" style={{ width: '100%' }} />
            </div>
            <div>
              <img src="https://via.placeholder.com/600x300" alt="pic2" style={{ width: '100%' }} />
            </div>
            <div>
              <img src="https://via.placeholder.com/600x300" alt="pic3" style={{ width: '100%' }} />
            </div>
          </Carousel>
        </div>
        <div >
          <p>右边展示的语句</p>
        </div>
      </div>
    </div>
  )
}

export default Banner