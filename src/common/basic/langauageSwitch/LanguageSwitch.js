import React , {  } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import './LanguageSwitch.css';

 LanguageSwitch.propTypes = {
    value:PropTypes.string,
    options:PropTypes.array,
    onChangeLan:PropTypes.func
}

function LanguageSwitch(props){
    
    const {value,options,onChangeLan} = props;
    

    const classesUl = classNames("tab-select",{
    })
    
    return (
        <ul className = {classesUl}>
            {options.map((item) => (
                <li 
                    key = {item.value}
                    className = {
                       `tab-item-lan ${ item.value === value ? 'is-actived' : ""}`
                    }
                    onClick = {() =>  { 
                        onChangeLan(item.value);
                    } }
                >
                    {item.name}
                </li>
            ))}
       </ul>
    )
}
LanguageSwitch.defaultProps = {
    value:null,
    options:[],
    onChangeLan:() => {
        return undefined
    } 
}
export default LanguageSwitch

