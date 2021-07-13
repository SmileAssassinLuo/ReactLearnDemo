import React ,{ useState, useContext } from 'react';
import LanguageSwitch from './LanguageSwitch';
import HomePageRender from './HomePageRender';
import {GlobalContext} from '../../App'

function HomePage (){
    const contentContext = useContext(GlobalContext);

    const [lan,setLan] = useState('TW');
    const lanArrOptions = [
      { value : 'TW' , name : '繁體中文'},
      { value : 'CN' , name : '简体中文'},
      { value : 'US' , name : 'ENGLISH'}
    ];
    const onChangeLan = (e) => {
        setLan(e);
        contentContext.toggle(e);
    }
    const [tab,setTab] = useState('Tab1');
    const onChangeTab = (val) => {
      setTab(val)
    }
    return (
        <>
            <LanguageSwitch  value = {lan} options = {lanArrOptions} onChangeLan = {onChangeLan}></LanguageSwitch>
            <HomePageRender options = {contentContext.defaultTabOpt} tab = {tab} onChangeTab = {onChangeTab}></HomePageRender>
        </>   
    )
}


export default HomePage;

