import React ,{ useEffect, useState, useContext } from 'react';
import LanguageSwitch from './LanguageSwitch';
import HomePageRender from './HomePageRender';
import {GlobalContext} from '../../App'
import {renderRoutes} from "react-router-config";
import axios from 'axios';

function HomePage (props){
    const contentContext = useContext(GlobalContext);
    const [TabOptionsTW,setTabOptionsTW] = useState([]);
    const [TabOptionsCN,setTabOptionsCN] = useState([]);
    const [TabOptionsUS,setTabOptionsUS] = useState([]);
    const { route } = props;
    const [lan,setLan] = useState('TW');
    const lanArrOptions = [
      { value : 'TW' , name : '繁體中文'},
      { value : 'CN' , name : '简体中文'},
      { value : 'US' , name : 'ENGLISH'}
    ];
    const onChangeLan = (e) => {
        setLan(e);
        contentContext.toggle(e);
        switch(e){
            case "TW" : setTabOpt(TabOptionsTW) ;break;
            case "CN" : setTabOpt(TabOptionsCN) ;break;
            case "US" : setTabOpt(TabOptionsUS) ;break;
            default :   setTabOpt(TabOptionsTW) ;break;
        }
    }

    const [tabOpt,setTabOpt] = useState(TabOptionsTW);

    const [IsLoading, setIsLoading] = useState(true);
    const [IsError, setIsError] = useState(false);
    useEffect(() => {
        const tabMenuUrl = `http://${window.location.host}/config/HomePageConfig.json`;
        const fetchData = async() => {
          
            setIsError(false);
            setIsLoading(true);
  
            try{
                    const result = await axios(
                        tabMenuUrl,
                    )
                    result.data["TabOptions"].forEach((item) => {
                            if(item.hasOwnProperty('TW')){
                                setTabOptionsTW(item['TW']);
                                setTabOpt(item['TW']);
                            }
                            if(item.hasOwnProperty('CN')){
                                setTabOptionsCN(item['CN']);
                            }
                            if(item.hasOwnProperty('US')){
                                setTabOptionsUS(item['US']);
                            }
                    })

                }catch(e){
                    setIsError(true);
                }
                setIsLoading(false);
            }
       fetchData();
    }, []);
  
    const [tab,setTab] = useState('Tab1');
    const onChangeTab = (val) => {
      setTab(val)
    }
    return (
        <div>  
        {IsError && <div>axios error</div>}
        {IsLoading?(
            <div>Loading ...</div>
        ):
        (
            <>
                <LanguageSwitch  value = {lan} options = {lanArrOptions} onChangeLan = {onChangeLan}></LanguageSwitch>
                <HomePageRender options = {tabOpt} tab = {tab} onChangeTab = {onChangeTab}></HomePageRender>
                { renderRoutes (route.routes) }
            </>
        )}
        </div>
        
    )
}


export default HomePage;

