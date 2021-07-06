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
  return (
    <div>
          <HomePageLog/>
          <LanSwitch value = {language} options = {lanArrOptions} onChangeLan = {onChangeLan}></LanSwitch>
          <GlobalContext.Provider value = {CD}>
              <Content/>
          </GlobalContext.Provider>
    </div>
  );
}

export default App;
