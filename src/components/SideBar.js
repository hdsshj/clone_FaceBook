import React from 'react';
import "./Style/SideBar.css";
import SideBarRow from './SideBarRow';
import { ExpandMoreOutlined } from '@mui/icons-material';


const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarRow
      src={"https://img.sbs.co.kr/newimg/news/20190624/201327376_1280.jpg"}
      title="이민국"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"} title="친구 찾기"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"} title="그룹"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"} title="Watch"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"} title="과거의 오늘"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"} title="저장됨"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"} title="페이지"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png"} title="이벤트"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/XxEsb0x8INQ.png"} title="채용정보"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"} title="최신글"/>
      <SideBarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png"} title="즐겨찾기"/>
      <SideBarRow Icon={ExpandMoreOutlined} title="더 보기"/>
    </div>
  )
}

export default SideBar;
