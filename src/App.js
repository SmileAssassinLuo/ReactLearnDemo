import React , { createContext,useState ,useEffect } from 'react'
import {renderRoutes} from 'react-router-config';
import { HashRouter ,Switch } from 'react-router-dom';
import HomePageLog from './common/homePage/HomePageLogo';


// renderRoutes 这个方法只渲染一层路由，如果涉及多层路由，只需在 父组件中 中再次调用 renderRoutes 即可。
import routes from './common/router/appRouter';
const CD = {
    language:"TW"
  }
export const GlobalContext = createContext({
    lan:CD.language,
    toggle:() => {}
});

function App() {
    const [defaultLanguage ,setLanguage] = useState(CD.language);

    useEffect(() => {
        console.log(CD.language);
    }, [defaultLanguage])
    return (
        <div>
             <GlobalContext.Provider value = {{
                 defaultLanguage,
                 toggle:(val) => { 
                    CD.language = val; 
                    setLanguage(val); 
                 }
             }}>
                <HashRouter>
                    <HomePageLog />
                    <Switch>
                        { renderRoutes(routes) }
                    </Switch>
                </HashRouter>
            </GlobalContext.Provider>
        </div>
    )
}

export default App;
