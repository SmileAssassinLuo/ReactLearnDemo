import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';

import {GlobalContext} from  '../../../App';
import './ScenePage.css'

function ScenePage(props){
    const contentContext = useContext(GlobalContext);

    const params = useParams();
    const history = useHistory();
    return (
        <div>
           <p> hello ,{params.sceneDetail}!</p>
           <button onClick = { () => {
               contentContext.toggle("TW");
               history.push("/");
              
           }}>Back HomePage</button>
        </div>
    )
}

export default ScenePage