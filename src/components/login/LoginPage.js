import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {TextField, InputAdornment , Button}from '@material-ui/core';
import {PersonOutline, LockOutlined} from '@material-ui/icons';
import './css/style.css'
import * as requests from "../../apiRequests/requests"


const Login = () => {
    let history = useHistory();
    let [idCard, setIdCard] = useState("");
    let [pass, setPass] = useState("");

    let handleSubmitLogin = (elem) =>{
        elem.preventDefault();
        requests.login(idCard, pass, (res)=>{
            if(res.statusCode === 200){
                if(res.data.position === "admin")
                    history.push("/newBook?user=admin&login="+res.data.id)
                else
                    history.push("/findBook?user=user&login="+res.data.id)
            }
        })
    }


    return (
        <div className={'main-container-login'}>
            <div className={"login-header"}>ورود</div>
            <div className={"up-shape"}/>
            <form onSubmit={handleSubmitLogin}>
                <div dir={'rtl'} className={'username-inp'}>
                    <TextField
                        onChange={(elem)=>(setIdCard(elem.target.value))}
                        name="idCard"
                        label="کدملی"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <PersonOutline />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div dir={'rtl'} className={'password-inp'}>
                    <TextField
                        onChange={(elem)=>(setPass(elem.target.value))}
                        type="password"
                        name="pass"
                        label="پسورد"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <LockOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div className="submit-btn">
                    <Button type='submit' variant="contained" color="primary">تایید</Button>
                </div>
            </form>
            <div className="signup-btn">
                <Button onClick={()=>{history.push("/signup")}} variant="outlined" size="small" color="primary">ثبت نام </Button>
            </div>

        </div>
    );
};

export default Login;
