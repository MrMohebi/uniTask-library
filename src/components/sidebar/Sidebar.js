import React from 'react';

import {NavLink,  useLocation} from "react-router-dom";
import "./css/style.css"

function url2paramsArray(search){
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

const matchWorkaround = (pathname) => (isMatch, location) => isMatch || location.pathname.startsWith(pathname);

const SideBar = () => {
    let locationInfo = useLocation()
    let searchParam = locationInfo.search.replace("?", "").length > 2 ?  locationInfo.search.replace("?", "") : "null=null"
    let urlParams = url2paramsArray(searchParam)

    if(urlParams['login'] > 0){
        if(urlParams.user === "admin"){
            return (
                <nav dir={"rtl"}  className={"main-container-sidebar"}>
                    <ul className="navList">
                        <div className={"nav-header"} >
                            12:48
                            <br/>
                            1399/01/01
                        </div>
                        <li className=" mb-3 mt-3" >
                            <NavLink to={"/newBook?user=admin&login="+urlParams['login']} isActive={matchWorkaround("/newBook")} activeClassName={"selected"}>ثبت کتاب</NavLink>
                        </li>
                        <li className=' mb-3 mt-3'>
                            <NavLink to={"/usersList?user=admin&login="+urlParams['login']} isActive={matchWorkaround("/usersList")} activeClassName={"selected"}>مدیریت اعضا</NavLink>
                        </li>
                        <li className=' mb-3 mt-3'>
                            <NavLink to={"/faveBooksList?user=admin&login="+urlParams['login']} isActive={matchWorkaround("/faveBooksList")} activeClassName={"selected"}>رتبه بندی کتاب ها</NavLink>
                        </li>
                        {/*
                        <li className=' mb-3 mt-3'>
                            <NavLink to={"/?user=admin&login="+urlParams['login']} isActive={matchWorkaround("/x")} activeClassName={"selected"}>نظرات و پینشهاد ها</NavLink>
                        </li>
                        */}


                    </ul>
                </nav>
            );
        } else {
            return (
                <nav dir={"rtl"}  className={"main-container-sidebar"}>
                    <ul className="navList">
                        <div className={"nav-header"} >
                            12:48
                            <br/>
                            1399/01/01
                        </div>
                        <li className=" mb-2 mt-2" >
                            <NavLink to={"/findBook?user=user&login="+urlParams['login']} isActive={matchWorkaround("/findBook")} activeClassName={"selected"}>جستجو در منابع</NavLink>
                        </li>
                        <li className=' mb-2 mt-2'>
                            <NavLink to={"/payFine?user=user&login="+urlParams['login']} isActive={matchWorkaround("/payFine")} activeClassName={"selected"}>پرداخت جریمه</NavLink>
                        </li>
                        {/*
                        <li className=' mb-2 mt-2'>
                            <NavLink to={"/?user=user&login="+urlParams['login']} isActive={matchWorkaround("/x")} activeClassName={"selected"}>ارسال نظر</NavLink>
                        </li>
                        */}

                    </ul>
                </nav>
            );
        }
    }else {
        return null;
    }




};

export default SideBar;
