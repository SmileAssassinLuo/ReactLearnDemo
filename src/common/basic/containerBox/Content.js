import React ,{ useContext ,useState  } from 'react';
import {GlobalContext} from '../../../App';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';

import './Content.css';



function Content(props){
    const contentContext = useContext(GlobalContext);
    console.log(contentContext);
    
    const {options,tab,onChangeTab} = props;
    
    const childOptions = [];
    options.map((item) => (
        childOptions.push(item.childScenes)
    ))
    const [selectedTab, setSelectedTab] = useState(tab);

  console.log(childOptions);

    return (
        <div className = {`tab`}>
            <ul className = {`tab-title-ul`}>
                {
                    options.map((tabOpt,tabIndex) => (
                        <li 
                            key = { tabOpt.value + tabIndex.toString()}
                            className = {`tab-title ${tabOpt.value === tab ? 'is-selectedTab' : ''}`}
                            onClick = {() => {
                                onChangeTab(tabOpt.value);
                                setSelectedTab(tabOpt.value)
                            }}
                        >
                            {tabOpt.name}
                        </li>
                    ))
                }
            </ul>
            <Router>
                <div>
                    {
                        childOptions.map((childOpt,childIndex) => (
                                <ul 
                                    key = {childOpt[childIndex].value + childIndex.toString()}
                                 className = {`tab-item-ul ${childOpt[childIndex].parTab !== selectedTab?'unselected-sences':''}`}
                                >
                                    {
                                        childOpt.map((opt) => (
                                            <li
                                                key = { opt.value  }
                                                className = {`tab-item-list ${opt.disabled?'disabled':""}`}
                                            >
                                                
                                                <Link to={`/${opt.value}`}>{opt.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                        ))
                    }
                </div>
                {
                    childOptions.map((routerOpt) => (
                        routerOpt.map((routerChildOpt,routerChildIndex) => (
                            <Route 
                             key = {routerChildOpt.value + routerChildIndex.toString()}
                             path = { `/${routerChildOpt.value}` }  component = {routerChildOpt.value}  
                             
                             />
                        ))
                    ))
                }
            </Router>
            
        </div>
    )
}

export default Content;