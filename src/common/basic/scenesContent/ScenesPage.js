import React, {useState, useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom';
import {GlobalContext} from  '../../../App';
import './ScenesPage.css';

import BackHome from '../backHome/BackHome';
import axios from 'axios';


function ScenesPage(props){
    const contentContext = useContext(GlobalContext);
    const params = useParams();
    const [pageText, setpageText] = useState("");
    const [IsLoading, setIsLoading] = useState(true);
    const [IsError, setIsError] = useState(false);

    const textURL = `http://${window.location.host}/common/${params.sceneDetail}/${contentContext.defaultLanguage}.json`;
    useEffect(() => {
        const feachDate = async () => {
            setIsLoading(true);
            setIsError(false);
            try{
                const result = await axios(textURL);
                setpageText(result.data.res);
            }catch(e){
                console.log(e);
                setIsError(true)
            }
            setIsLoading(false)
        }
        feachDate();
    },[textURL])
    return (
        <>
            {IsError && <div>axios error</div>}
            {IsLoading?(
                <div>Loading ...</div>
            ):
            (
                <>
                    <BackHome  scenseName = {pageText.scenseName}></BackHome>
                    <div className = {`scenesContainer`}>
                        hello  {pageText.warnTips}
                       
                    </div>
                </>

            )}
      
      </>
    )
}

export default ScenesPage