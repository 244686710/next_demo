import React from 'react'
import Head from '../components/head'
import localStorage from "../utils/storage"
import { skin, setSkinStyle } from '../utils/skin'
import style from "./skin.styl?module"
const timeout = (ms, result) => {
  return new Promise(resolve => setTimeout(() => resolve(result), ms));
};

const skins = [
  { key: "mangoYellow", name: "芒果黄", color: "#FFD700" },
  { key: "coolBlack", name: "炫酷黑", color: "#212121" },
  { key: "kuGouBlue", name: "酷狗蓝", color: "#2CA2F9" },
  { key: "netBaseRed", name: "网易红", color: "#D43C33" },
  { key: "qqGreen", name: "QQ绿", color: "#31C27C" }
];

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    setSkinStyle(skin[localStorage.getSkin()]);
  }
  setCurrentSkin (key) {
    localStorage.setSkin(key)
    setSkinStyle(skin[key])
    console.log(1)
  }
  render() {
    return (
      <div>
      <Head title="Home" />
      
      <h1 className="skin-app-header">Hello {this.props.userName}!</h1> 
      
      <div>
        {
          skins.map(skin => (
            <div className={style.skinWrapper} key={skin.key} 
              onClick={() => {
                this.setCurrentSkin(skin.key)
              }}>
              <div className={style.skinColor} style={{ backgroundColor: skin.color, boxShadow: `0 0 3px ${skin.color}` }}>
                <i className="icon-right" style={{ display: skin.key === this.props.currentSkin ? "" : "none" }}></i>
              </div>
              <div>{skin.name}</div>
            </div>
          ))
        }
      </div> 
    </div>
    )
  }
}



Home.getInitialProps = async () => {
  return await timeout(3000, {userName: 'Morgan1'});
  
};

export default Home
