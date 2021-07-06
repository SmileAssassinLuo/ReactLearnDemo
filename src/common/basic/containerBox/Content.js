import React ,{ useContext } from 'react';
import {GlobalContext} from '../../../App';


function Content(){
  
    const contentContext = useContext(GlobalContext);
    console.log(contentContext);

    return (
        <div>

        </div>
    )
}

export default Content;