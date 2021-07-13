import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {GlobalContext} from  '../../../App';

import './BackHome.css';
import imgURL from '../../../asset/img/exit.png';


function BackHome(props){
    //const params = useParams();
    const history = useHistory();
    const contentContext = useContext(GlobalContext);

    const returnMain = () => {
        contentContext.toggle("TW");
        history.push('/');
    }

    return (
        <div className = {`backHome`}>
            <p className = {`scenseName`}>{props.scenseName}</p>
            <p className = {`backHomeBtn`} onClick = {() => {returnMain()}}>
                <img src = {imgURL}  alt = '离开'/>
                <span className = {'backHomeBtnText'}>离开</span>

            </p>
        </div>
    )
}

export default BackHome