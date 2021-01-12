import React from 'react';
import {useLocation} from "react-router-dom";
import './css/style.css'

function url2paramsArray(search){
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}


const Header = () => {

    let locationInfo = useLocation()
    let searchParam = locationInfo.search.replace("?", "").length > 2 ?  locationInfo.search.replace("?", "") : "null=null"
    let urlParams = url2paramsArray(searchParam)

    let login = urlParams['login'] > 0;

    return (
        <div  style={{width: (login ? "calc(100% - 250px)": "100%")}} className={'header'}>
            <span className={"text-header"}>کتابخانه مرکزی</span>
        </div>
    );
};

export default Header;
