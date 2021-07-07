import React , { createContext, useState,useEffect } from 'react';
import HomePageLog from './common/homePage/HomePageLogo';
import LanSwitch from './common/basic/langauageSwitch/LanguageSwitch';
import Content from  './common/basic/containerBox/Content';

//全局部分变量对象
const CD = {
  lan:"TW"
}

export const GlobalContext = createContext(CD);
function App() {
  const [language,setLanguage] = useState('TW');
  const lanArrOptions = [
    { value : 'TW' , name : '繁體中文'},
    { value : 'CN' , name : '简体中文'},
    { value : 'US' , name : 'ENGLISH'}
  ];
  const onChangeLan = (e) => {
      setLanguage(e)
  }
  
  useEffect(() => {
     CD.lan = language;
  }, [language])

  const [tab,setTab] = useState('Tab1');
  const TabOptions = [
    {
        name:'菜单一',
        value: 'Tab1',
        childScenes:[
            {
                name:'菜单一场景一',
                value:'Tab1Scene1',
                parTab:"Tab1"
            },{
                name:'菜单一场景二',
                value:'Tab1Scene2',
                parTab:"Tab1"
            }
        ]
    },
    {
        name :'菜单二',
        value: 'Tab2',
        childScenes:[
            {
                name:'菜单二场景一',
                value:'Tab2Scene1',
                parTab:"Tab2"
            },{
                name:'菜单二场景二',
                value:'Tab2Scene2',
                disabled:true,
                parTab:"Tab2"
            },{
                name:'菜单二场景三',
                value:'Tab2Scene3',
                parTab:"Tab2"
            },{
                name:'菜单二场景四',
                value:'Tab2Scene4',
                disabled:true,
                parTab:"Tab2"
            }
        ]
    }
  ]
  const onChangeTab = (val) => {
    setTab(val)
  }
  return (
    <div>
          <HomePageLog/>
          <LanSwitch value = {language} options = {lanArrOptions} onChangeLan = {onChangeLan}></LanSwitch>
          <GlobalContext.Provider value = {CD}>
              <Content options = {TabOptions} tab = {tab} onChangeTab = {onChangeTab}></Content>
          </GlobalContext.Provider>
    </div>
  );
}

export default App;
