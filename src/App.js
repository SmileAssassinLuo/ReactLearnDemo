import React , { createContext,useState ,useEffect } from 'react'
import {renderRoutes} from 'react-router-config';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import HomePageLog from './common/homePage/HomePageLogo';


// renderRoutes 这个方法只渲染一层路由，如果涉及多层路由，只需在 父组件中 中再次调用 renderRoutes 即可。
import routes from './common/router/appRouter';
const CD = {
    language:"TW"
  }

const CodeList = {
    tabOpt:[]
}
export const GlobalContext = createContext({
    lan:CD.language,
    tabOpt:CodeList.tabOpt,
    toggle:() => {}
});



function App() {
    const [defaultLanguage ,setLanguage] = useState(CD.language);
    const [TabOptionsTW,setTabOptionsTW] = useState([]);
    const [TabOptionsCN,setTabOptionsCN] = useState([]);
    const [TabOptionsUS,setTabOptionsUS] = useState([]);
    const [defaultTabOpt,setTabOpt] = useState(TabOptionsTW);
    const [IsLoading, setIsLoading] = useState(true);
    const [IsError, setIsError] = useState(false);

    const  toggleFun = (val) => {
        CD.language = val; 
        setLanguage(val); 
        switch(val){
            case "TW" : setTabOpt(TabOptionsTW) ;break;
            case "CN" : setTabOpt(TabOptionsCN) ;break;
            case "US" : setTabOpt(TabOptionsUS) ;break;
            default :   setTabOpt(TabOptionsTW) ;break;
        }
    }

    useEffect(() => {
        console.log(CD.language);
    }, [defaultLanguage]);


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





    return (
        <div>
            {IsError && <div>axios error</div>}
            {IsLoading?(
                <div>Loading ...</div>
            ):
            (
                <GlobalContext.Provider value = {{
                    defaultLanguage,
                    defaultTabOpt,
                    toggle:toggleFun
                }}>
                    <Router>
                        <HomePageLog />
                        <Switch>
                            { renderRoutes(routes) }
                        </Switch>
                    </Router>
                </GlobalContext.Provider>
             )}
        </div>
    )
}

export default App;
