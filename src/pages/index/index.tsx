import { useState, useEffect, useReducer, useMemo, useRef } from 'react';
// import { useRouter } from '@tarojs/taro' // Taro 专有 Hooks
import { View, Text } from "@tarojs/components";
// import { AtButton, AtInput, AtNavBar } from "taro-ui";
import NavBar from '@components/navBar/index';
import RichText from "@components/richText";
import CanvasAuto from '@components/canvas';
import "./index.scss";

const Index = () => {
const [html, setHtml] = useState('<p><img style="display:block;height:auto;width:100%;"alt="富文本图片"src="https://www.custcome.com/xcxnetcom_static/userfiles/ac_placeholder.png"/>');
  return (
    <View className="index">
      <View className='nav-bar'>
        <NavBar title='真的吗'></NavBar>
      </View>
      <Text style='color:red'>Hello world!</Text>
      <RichText html={html}></RichText>
      <CanvasAuto></CanvasAuto>
    </View>
  );
};

export default Index;
