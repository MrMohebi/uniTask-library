import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {PersonOutline, LockOutlined,FingerprintOutlined,PhoneAndroidOutlined,EmailOutlined} from '@material-ui/icons';
import {TextField, InputAdornment , Button,}from '@material-ui/core';
import './css/style.css'
import * as requests from "../../apiRequests/requests"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const ReactSwal = withReactContent(Swal)


const Signup = () => {
    let history = useHistory();
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [idCard, setIdCard] = useState("");
    let [password, setPassword] = useState("")




    let handleSubmitSignup = (elem) =>{
        elem.preventDefault();
        requests.signup(name, idCard, password, phone, email,  (res)=>{
            if(res.statusCode === 200){
                ReactSwal.fire({
                    title: 'ثبت نام با موفقیت انجام شد',
                    icon: 'success',
                    confirmButtonText: "تایید",
                })
            }
        })
    }

    return (
        <div className={'main-container-signup'}>
            <div className={"signup-header"}>ثبت نام</div>
            <div className={"up-shape"}/>
            <div dir={'rtl'} className={'name-inp'}>
                <TextField
                    onChange={(elem)=>(setName(elem.target.value))}
                    label="نام و نام خانوادگی"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <PersonOutline />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <div dir={'rtl'} className={'idCard-inp'}>
                <TextField
                    onChange={(elem)=>(setIdCard(elem.target.value))}

                    label="کدملی"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <FingerprintOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <div dir={'rtl'} className={'phone-inp'}>
                <TextField
                    onChange={(elem)=>(setPhone(elem.target.value))}

                    label="شماره تلفن"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <PhoneAndroidOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <div dir={'rtl'} className={'password-inp'}>
                <TextField
                    onChange={(elem)=>(setPassword(elem.target.value))}

                    label="رمز"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <LockOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <div dir={'rtl'} className={'email-inp'}>
                <TextField
                    onChange={(elem)=>(setEmail(elem.target.value))}

                    label="ایمیل"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <EmailOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <div className="submit-btn">
                <Button onClick={handleSubmitSignup} variant="contained" color="primary">تایید</Button>
            </div>

            <div className="login-btn-sup">
                <Button onClick={()=>{history.push("/")}} variant="outlined" size="small" color="primary">ورود </Button>
            </div>
        </div>
    );
};

export default Signup;
