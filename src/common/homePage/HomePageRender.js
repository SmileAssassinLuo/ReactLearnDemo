import React ,{ useState }from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';//引入浏览器路由,(还有Hash路由)，Route指定组件

import './HomePageRender.css'

function HomePageRender(props){
    const {options,tab,onChangeTab} = props;
    
    const childOptions = [];
    options.map((item) => {
        if(item.childScenes === undefined || item.childScenes === null){
            item.childScenes = [];
        }
      return  childOptions.push(item.childScenes)
    });
  
    const [currentIndex,setCurrentIndex] = useState(0);
    return (
        <Router>
            <div className = {`tab`}>
                <ul className = {`tab-title-ul`}>
                    {
                        options.map((tabOpt,tabIndex) =>{
                            return (
                                <li 
                                    key = { tabOpt.value + tabIndex.toString() }
                                    className = {`tab-title ${tabOpt.value === tab ? 'is-selectedTab' : ''}`}
                                    onClick = {() => {
                                        onChangeTab(tabOpt.value);
                                        setCurrentIndex(tabIndex)
                                    }}
                                >
                                    {tabOpt.name + tabOpt.value}
                                </li>
                            )
                        })
                    }
                </ul>
             <div>
                    {
                        childOptions.map((childOpt,childIndex) => (
                                <ul 
                                   // key = {childOpt[childIndex]["scenseValue"] + childIndex.toString()}
                                   key = {childIndex+Math.random()*10}
                                className = {`tab-item-ul ${childIndex !== currentIndex ? 'unselected-sences':''}`}
                                >
                                    {
                                        childOpt.map((opt) => (
                                            <li
                                                key = { opt.scenseValue  }
                                                className = {`tab-item-list ${opt.disabled?'tab-item-list-disabled':""}`}
                                            >
                                                
                                                <Link to={`/scenePage/${opt.scenseValue}`}>{opt.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                        ))
                    }
                </div>

                {/* <Switch>
                {
                        childOptions.map((routerOpt) => (
                            routerOpt.map((routerChildOpt,routerChildIndex) => (
                                <Route 
                                key = {routerChildOpt.scenseValue + routerChildIndex.toString()}
                                path = { `/${routerChildOpt.scenseValue}` }  component = {routerChildOpt.value}  
                                
                                />
                            ))
                        ))
                    }
                </Switch> */}
            </div>
        </Router>
    )
}


export default HomePageRender