import React, { useState, useEffect } from 'react'
import './common/common.css'
import './css/index.css'
import './css/reset.css'
import echarts from 'echarts'
const PartyBuildPlatform = () => {

  //页面交互、数据
  // const myChart1 = echarts.init(document.getElementById('echarts_data1'))

  // const echart1 = () => {
  //   var option1 = {
  //     color: ['#0345A2'],
  //     title: {
  //       default: false
  //     },
  //     //整个图表位置
  //     grid: {
  //       left: '1%',
  //       right: '4%',
  //       bottom: '10%',
  //       top: '15%',
  //       containLabel: true
  //     },
  //     tooltip: {
  //       trigger: 'axis'
  //     },
  //     toolbox: {
  //       show: false
  //     },
  //     xAxis: {
  //       type: 'category',
  //       boundaryGap: false,
  //       data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  //       axisLabel: {
  //         interval: 1
  //       },
  //       axisLine: {
  //         lineStyle: {
  //           color: '#0345A2', // 颜色
  //           width: 1, // 粗细
  //           type: 'solid'
  //         }
  //       },
  //       axisLabel: {
  //         textStyle: {
  //           color: '#86BED3'
  //         }
  //       },
  //       //辅助线
  //       splitLine: {
  //         show: true,
  //         lineStyle: {
  //           // 使用深浅的间隔色
  //           color: '#143260',
  //           type: 'dashed'
  //         }
  //       }
  //     },
  //     yAxis: {
  //       type: 'value',
  //       axisLine: {
  //         lineStyle: {
  //           color: '#0345A2', // 颜色
  //           width: 1, // 粗细
  //           type: 'solid'
  //         }
  //       },
  //       axisLabel: {
  //         textStyle: {
  //           color: '#86BED3'
  //         }
  //       },
  //       //辅助线
  //       splitLine: {
  //         show: true,
  //         lineStyle: {
  //           // 使用深浅的间隔色
  //           color: '#143260',
  //           type: 'dashed'
  //         }
  //       }
  //     },
  //     series: [{
  //       name: '数据量',
  //       type: 'line',
  //       smooth: true,
  //       data: [320, 590, 680, 790, 920, 820, 920, 1020, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752],
  //       symbol: 'none',
  //       areaStyle: {
  //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //           offset: 0,
  //           color: '#023D7D' // 0% 处的颜色
  //         }, {
  //           offset: 1,
  //           color: '#0B1842' // 100% 处的颜色
  //         }])
  //       },
  //       markLine: {
  //         show: false
  //       }
  //     }]
  //   }
  //   myChart1.setOption(option1)
  // }
  // echart1()

  // const echart2 = () => {
  //   var option2 = {
  //     color: ['#0345A2'],
  //     title: {
  //       default: false
  //     },
  //     //整个图表位置
  //     grid: {
  //       left: '1%',
  //       right: '4%',
  //       bottom: '10%',
  //       top: '15%',
  //       containLabel: true
  //     },
  //     tooltip: {
  //       trigger: 'axis'
  //     },
  //     toolbox: {
  //       show: false
  //     },
  //     xAxis: {
  //       type: 'category',
  //       boundaryGap: false,
  //       data: ['5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07', '5-08', '5-09', '5-10', '5-11', '5-12', '5-13', '5-14', '5-15', '5-16', '5-17', '5-18', '5-19', '5-20', '5-21', '5-22', '5-5-23', '5-24', '5-25', '5-26', '5-27', '5-28', '5-29', '5-30'],
  //       axisLabel: {
  //         interval: 1
  //       },
  //       axisLine: {
  //         lineStyle: {
  //           color: '#0345A2', // 颜色
  //           width: 1, // 粗细
  //           type: 'solid'
  //         }
  //       },
  //       axisLabel: {
  //         textStyle: {
  //           color: '#86BED3'
  //         }
  //       },
  //       //辅助线
  //       splitLine: {
  //         show: true,
  //         lineStyle: {
  //           // 使用深浅的间隔色
  //           color: '#143260',
  //           type: 'dashed'
  //         }
  //       }
  //     },
  //     yAxis: {
  //       type: 'value',
  //       axisLine: {
  //         lineStyle: {
  //           color: '#0345A2', // 颜色
  //           width: 1, // 粗细
  //           type: 'solid'
  //         }
  //       },
  //       axisLabel: {
  //         textStyle: {
  //           color: '#86BED3'
  //         }
  //       },
  //       //辅助线
  //       splitLine: {
  //         show: true,
  //         lineStyle: {
  //           // 使用深浅的间隔色
  //           color: '#143260',
  //           type: 'dashed'
  //         }
  //       }
  //     },
  //     series: [{
  //       name: '数据量',
  //       type: 'line',
  //       smooth: true,
  //       data: [251, 635, 920, 664, 151, 681, 365, 151, 134, 290, 350, 251, 635, 920, 664, 151, 681, 365, 151, 134, 290, 350, 251, 635, 920, 664, 151, 681, 365, 151, 134, 290, 350],
  //       symbol: 'none',
  //       areaStyle: {
  //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //           offset: 0,
  //           color: '#023D7D' // 0% 处的颜色
  //         }, {
  //           offset: 1,
  //           color: '#0B1842' // 100% 处的颜色
  //         }])
  //       },
  //       markLine: {
  //         symbol: 'none',
  //         itemStyle: {
  //           normal: {
  //             color: '#1e90ff',
  //             label: {
  //               show: true
  //             }
  //           }
  //         },
  //         data: [{
  //           type: 'average',
  //           name: '平均值'
  //         }]
  //       }
  //     }]
  //   }
  //   myChart1.setOption(option2)
  // }

  return (
    <div className="container">
      {/* <!--顶部盒子--> */}
      <div className="top">
        <ul className="tab_box">
          <li className="tab1"></li>
          <li className="tab2"></li>
          <li className="tab3"></li>
        </ul>
        <div className="top_center">党员学习大数据管理平台</div>
        <ul className="weather">
          {/* <li>2018-05-19<span>&nbsp;</span><span>{new Date()}</span></li>
          <li><span><img src="img/icon_weather/0.png" />&nbsp;</span>多云</li>
          <li>27度</li>
          <li>微风三级</li>
          <li>AQI&nbsp;<span>良</span></li> */}
        </ul>
      </div>
      {/* <!--第一页中间部分的盒子--> */}
      <div className="main_box">
        <div className="main_left">
          <div className="left_top">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page1/icon4.png" alt="Example" />每日学习时长统计</div>
            <div className="data_num_box">
              <div className="data_box1 active">
                <div className="data_title">总时长</div>
                <font className="font qianlan" face="font01">657.5K</font>
                <span>小时</span>
                <div className="j1_box1">
                  <span className="j1_1"></span>
                  <span className="j1_2"></span>
                  <span className="j1_3"></span>
                  <span className="j1_4"></span>
                </div>
              </div>
              <div className="data_box2">
                <div className="data_title">今日数据量</div>
                <font className="font shenlan" face="font01">0.87K</font>
                <span>小时</span>
                <div className="j1_box2 display">
                  <span className="j1_1"></span>
                  <span className="j1_2"></span>
                  <span className="j1_3"></span>
                  <span className="j1_4"></span>
                </div>
              </div>
            </div>

            <div id="echarts_data1"></div>
          </div>

          <div className="left_bottom">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page1/icon6.png" alt="My Image" />个人学习时长排名</div>
            <ul className="tab_pm">
              <li className="active">总量</li>
              <li>当日</li>
              <li>近30天</li>
            </ul>
            <div id="progress1_chart"></div>
          </div>
        </div>

        <div className="main_center">
          <div className="center_top">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page1/icon3.png" /></div>
          </div>
          <div className="center_bottom">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page1/icon2.png" />先进党员展示</div>
            <div className="sq_data">
              <div className="sq_left">
                <div className="sq_left_t">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 qianlan" face="font01">陈红</font>
                  </div>
                </div>
                <span className="line"></span>
                <div className="sq_left_b">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 huangse" face="font01">张明</font>
                  </div>
                </div>
              </div>
              <div className="sq_left">
                <div className="sq_left_t">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 qianlan" face="font01">李玉</font>
                  </div>
                </div>
                <span className="line"></span>
                <div className="sq_left_b">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 huangse" face="font01">王维</font>
                  </div>
                </div>
              </div>
              <div className="sq_left">
                <div className="sq_left_t">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 qianlan" face="font01">赵丽</font>
                  </div>
                </div>
                <span className="line"></span>
                <div className="sq_left_b">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 huangse" face="font01">刘强</font>
                  </div>
                </div>
              </div>
              <div className="sq_left">
                <div className="sq_left_t">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 qianlan" face="font01">孙芳</font>
                  </div>
                </div>
                <span className="line"></span>
                <div className="sq_left_b">
                  <div className="data_box" style={{ textAlign: 'center' }}>
                    <font className="font3 huangse" face="font01">杨刚</font>
                  </div>
                </div>
              </div>
              <div id="sq_right">
                {/* <!--echarts--> */}
              </div>
            </div>
          </div>
        </div>

        <div className="main_right">
          <div className="right_top">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page1/icon5.png" /></div>
            <div className="data_sjjm">
              <div className="data_box2">
                <div className="data_title">党员人数</div>
                <font className="font qianlan" face="font01">451</font>
                <span>个</span>
              </div>
              <div className="data_box2">
                <div className="data_title">学习时长</div>
                <font className="font shenlan" face="font01">876</font>
                <span>小时</span>
              </div>
              <div className="data_box2">
                <div className="data_title">专题库</div>
                <font className="font zise" face="font01">678</font>
                <span>个</span>
              </div>
            </div>
          </div>
          <div className="right_bottom">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page1/icon1.png" />学习资料访问频率</div>
            <div className="qiuqiu">
              <img src="img/page1/qiuqiu.png" />
            </div>
            <div id="jindu2">

            </div>
          </div>
        </div>
      </div>

      {/* <!--第二页中间部分的盒子--> */}
      <div className="main_box2 display">
        <div className="top_box">
          <div className="top_box_left">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page2/icon1.png" />社区实时数据</div>
            <div className="community">
              <ul className="b_s">
                <li>+</li>
                <li>-</li>
              </ul>
            </div>
          </div>
          <div className="top_box_center">
            <div className="p2_cT">
              <span className="j_1"></span>
              <span className="j_2"></span>
              <span className="j_3"></span>
              <span className="j_4"></span>
              <div className="title"><img src="img/page2/icon2.png" />社区实时数据</div>
              <ul className="p2_cT_box">
                <li>
                  <div className="p2_cT_title">当前人数</div>
                  <span className="block block1">
                    <font className="font2 huise" face="font01">0</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">0</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">5</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">3</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">1</font>
                  </span>
                  <span className="ren">人</span>
                </li>
                <li>
                  <div className="p2_cT_title">访客人数</div>
                  <span className="block block1">
                    <font className="font2 huise" face="font01">0</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">0</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">4</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">4</font>
                  </span>
                  <span className="block">
                    <font className="font2 huise" face="font01">1</font>
                  </span>
                  <span className="ren">人</span>
                </li>
                <li>
                  <div className="p2_cT_title">需关注人数</div>
                  <span className="block block1 block_o">
                    <font className="font2 huangse" face="font01">0</font>
                  </span>
                  <span className="block block_o">
                    <font className="font2 huangse" face="font01">0</font>
                  </span>
                  <span className="block block_o">
                    <font className="font2 huangse" face="font01">0</font>
                  </span>
                  <span className="block block_o">
                    <font className="font2 huangse" face="font01">6</font>
                  </span>
                  <span className="block block_o">
                    <font className="font2 huangse" face="font01">5</font>
                  </span>
                  <span className="ren">人</span>
                </li>
              </ul>
            </div>
            <div className="p2_cB">
              <span className="j_1"></span>
              <span className="j_2"></span>
              <span className="j_3"></span>
              <span className="j_4"></span>
              <div className="title"><img src="img/page2/icon4.png" />房屋概览</div>

              <div id="Cake"></div>
              <ul className="home_data">
                <li className="home_data_one">
                  <div className="home_data_num">
                    <font className="font1 shenlan" face="font01">456</font>
                    <span>户</span>
                  </div>
                  <div className="home_data_name">闲置</div>
                </li>
                <li className="home_data_two">
                  <div className="home_data_num">
                    <font className="font1 qianlan" face="font01">663</font>
                    <span>户</span>
                  </div>
                  <div className="home_data_name">出租</div>
                </li>
                <li className="home_data_three">
                  <div className="home_data_num">
                    <font className="font1 zise" face="font01">862</font>
                    <span>户</span>
                  </div>
                  <div className="home_data_name">自住</div>
                </li>
              </ul>

            </div>
          </div>
          <div className="top_box_right">
            <div className="p2_rT">
              <span className="j_1"></span>
              <span className="j_2"></span>
              <span className="j_3"></span>
              <span className="j_4"></span>
              <div className="title"><img src="img/page2/icon3.png" />社区概览</div>
              <div className="data_sqgl">
                <div className="data_box">
                  <font className="font shenlan" face="font01">10025</font><span>人</span>
                  <div className="data_title2">社区实有人口</div>
                </div>
                <div className="data_box">
                  <font className="font zise" face="font01">8962</font><span>个</span>
                  <div className="data_title2">户籍人口总数</div>
                </div>
              </div>
              <span className="line"></span>
              <div className="data_sqgl">
                <div className="data_box">
                  <font className="font qianlan" face="font01">10025</font><span>人</span>
                  <div className="data_title2">暂住证未办理人数</div>
                </div>
                <div className="data_box">
                  <font className="font huangse" face="font01">8962</font><span>个</span>
                  <div className="data_title2">持有暂住证人数</div>
                </div>
              </div>

              <ul className="shequ_charts">
                <li id="chartsdiv1"></li>
                <li id="chartsdiv2"></li>
              </ul>
              <ul className="home_data2">
                <li className="home_data_one">
                  <div className="home_data_num">
                    <font className="font1 shenlan" face="font01">456</font>
                    <span>户</span>
                  </div>
                  <div className="home_data_name">流动人口</div>
                </li>
              </ul>
              <ul className="home_data2">
                <li className="home_data_two">
                  <div className="home_data_num">
                    <font className="font1 qianlan" face="font01">456</font>
                    <span>户</span>
                  </div>
                  <div className="home_data_name">特殊人群</div>
                </li>
              </ul>
            </div>
            <div className="p2_rB">
              <span className="j_1"></span>
              <span className="j_2"></span>
              <span className="j_3"></span>
              <span className="j_4"></span>
              <div className="title"><img src="img/page2/icon5.png" />车位概览</div>
              <div className="data_cwgl">
                <div className="data_box">
                  <font className="font zise" face="font01">14</font><span>个</span>
                  <div className="data_title2">特殊车辆</div>
                </div>
                <div className="data_box">
                  <font className="font qianlan" face="font01">120</font><span>个</span>
                  <div className="data_title2">在场车辆数</div>
                </div>
                <div className="data_box">
                  <font className="font shenlan" face="font01">314</font><span>个</span>
                  <div className="data_title2">总车位数</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_box">
          <div className="bottom_left">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page2/icon6.png" />人员通行记录</div>
            <ul className="list">
              <li>
                <span className="circular3"></span>
                <span className="time">
                  10:23
                </span>
                <span className="qianlan">【业主】</span>
                <span>张发江进入1号楼2单元</span>
              </li>
              <li>
                <span className="circular1"></span>
                <span className="time">
                  12:08
                </span>
                <span className="qianlan">【特殊人员】</span>
                <span>李晓武进入3号楼6单元</span>
              </li>
              <li>
                <span className="circular3"></span>
                <span className="time">
                  16:36
                </span>
                <span className="qianlan">【租客】</span>
                <span>李星进入13号楼2单元</span>
              </li>
              <li>
                <span className="circular2"></span>
                <span className="time">
                  13:08
                </span>
                <span className="qianlan">【访客】</span>
                <span>吴晓进入6号楼3单元</span>
              </li>
            </ul>
          </div>
          <div className="bottom_center">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page2/icon7.png" />事件记录</div>
            <ul className="list">
              <li>
                <span className="circular2"></span>
                <span className="time">
                  2019-05-23 12:08
                </span>
                <span>5号楼门口垃圾桶满了，请物业处理</span>
                <span className="handle huangse">【未处理】</span>
              </li>
              <li>
                <span className="circular3"></span>
                <span className="time">
                  2019-05-23 12:08
                </span>
                <span>1号楼2单元门口出现打架事件</span>
                <span className="handle qianlan">【已处理】</span>
              </li>
              <li>
                <span className="circular2"></span>
                <span className="time">
                  2019-05-23 12:08
                </span>
                <span>3号楼门口有抛洒物，请物业处理</span>
                <span className="handle huangse">【未处理】</span>
              </li>
              <li>
                <span className="circular3"></span>
                <span className="time">
                  〔2019-05-23 12:08〕
                </span>
                <span>小区西门大门口出现小摊贩</span>
                <span className="handle qianlan">【已处理】</span>
              </li>
            </ul>
          </div>
          <div className="bottom_right">
            <span className="j_1"></span>
            <span className="j_2"></span>
            <span className="j_3"></span>
            <span className="j_4"></span>
            <div className="title"><img src="img/page2/icon8.png" />车辆通行记录</div>
            <ul className="list">
              <li>
                <span className="circular1"></span>
                <span className="time">
                  12:08
                </span>
                <span className="qianlan">【访客】</span>
                <span>赵鹤 陕A·23652 从东门驶入小区</span>
              </li>
              <li>
                <span className="circular3"></span>
                <span className="time">
                  12:08
                </span>
                <span className="qianlan">【业主】</span>
                <span>李晓丽 川A·23552 从西门驶出小区</span>
              </li>
              <li>
                <span className="circular2"></span>
                <span className="time">
                  12:08
                </span>
                <span className="qianlan">【访客】</span>
                <span>李武 陕A·568A2 从西门驶入小区</span>
              </li>
              <li>
                <span className="circular3"></span>
                <span className="time">
                  12:08
                </span>
                <span className="qianlan">【业主】</span>
                <span>温蕊莉 陕A·5S56B 从东门驶入小区</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



export default PartyBuildPlatform