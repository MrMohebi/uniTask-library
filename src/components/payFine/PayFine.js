import React, {useState} from 'react';
import { Button,}from '@material-ui/core';

import "./css/style.css"
import * as requests from "../../apiRequests/requests"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import {useLocation} from "react-router-dom";

const ReactSwal = withReactContent(Swal)

function url2paramsArray(search){
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}


const PayFine = () => {
    let locationInfo = useLocation()
    let searchParam = locationInfo.search.replace("?", "").length > 2 ?  locationInfo.search.replace("?", "") : "null=null"
    let urlParams = url2paramsArray(searchParam)

    let [fine, setFine] = useState(0);

    let getUserFine = (userId) =>{
        requests.getUserInfo(userId, (res)=>{
            console.log(res)
            if(res.statusCode === 200){
                setFine(res.data[0].fine)
            }else {
                return "یافت نشد";
            }
        })
    }


    getUserFine(urlParams.login);
    return (
        <div className={' main-container-PayFine '}>
            <div className="amount"><span>مبلغ جریمه شما  </span><span>  {fine}   </span></div>
            <div className="pay-button">
                <Button variant="contained" color="primary">پرداخت</Button>
            </div>
        </div>
    );
};

export default PayFine;
