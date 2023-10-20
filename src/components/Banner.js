import React from 'react'
import { Carousel } from 'antd'

import './style.css' // 引入自定义样式文件 
const Banner = () => {

  return (

    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '75%', marginTop: '46px' }}>
        <Carousel autoplay>
          <div>
            <img src="http://cpc.people.com.cn/NMediaFile/2023/0921/MAIN1695285348592EADOLDAW9X.jpg" alt="pic1" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="http://cpc.people.com.cn/NMediaFile/2023/0921/MAIN169528520161718IWXWB7M0.jpg" alt="pic3" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <img src="http://cpc.people.com.cn/NMediaFile/2023/0612/MAIN16865313157562PP171XU0K.jpg" alt="pic2" style={{ width: '100%', height: '100%' }} />
          </div>
        </Carousel>
      </div>
      <div className="learning-focus-container" style={{ marginTop: '75px', marginLeft: '25px' }}>
        <h2 style={{ color: 'red' }}>学习重点</h2>
        <hr className="divider" />
        <div className="links-container">
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=10027309357322682906&item_id=10027309357322682906" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见新开发银行行长罗塞夫
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=4710029322649592856&item_id=4710029322649592856" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见巴基斯坦总理卡卡尔
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=4301561341082239475&item_id=4301561341082239475" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见莫桑比克总理马莱阿内
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=4710029322649592856&item_id=4710029322649592856" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见泰国总理赛塔
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=14007888369463337410&item_id=14007888369463337410" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见刚果（布）总统萨苏
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=5433484194830377572&item_id=5433484194830377572" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见土库曼斯坦民族领袖、人民委员会主席
            别尔德穆哈梅多夫
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=3996156154222167808&item_id=3996156154222167808" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见埃及总理马德布利
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=13748105938125276267&item_id=13748105938125276267" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见蒙古国总统呼日勒苏赫
          </a>
          <a href="https://www.xuexi.cn/lgpage/detail/index.html?id=14229145858599062852&item_id=14229145858599062852" className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见柬埔寨首相洪玛奈
          </a>
          <a href='https://www.xuexi.cn/lgpage/detail/index.html?id=14748124594900247478&item_id=14748124594900247478' className="link-item" target="_blank" rel="noopener noreferrer">
            习近平会见联合国秘书长古特雷斯
          </a>
        </div>
      </div>
    </div >

  )
}

export default Banner