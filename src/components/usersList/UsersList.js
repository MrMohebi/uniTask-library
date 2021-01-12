import React, {Component, useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button, TextField, Input}  from "@material-ui/core";
import "./css/style.css"
import * as requests from "../../apiRequests/requests"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const ReactSwal = withReactContent(Swal)


class UsersList extends Component {
    state={
        rows:[]
    }

    componentDidMount() {
        requests.getUserList((res)=>{
            if(res.statusCode === 200){
                this.setState({
                    rows: this.createRows(res.data),
                })
            }
        })
    }

    sendMassage = (phone) =>{
        ReactSwal.fire({
            title: 'ارسال پیام به ' + phone,
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            confirmButtonText: 'ارسال',
        }).then((result) => {
            if (result.isConfirmed) {
                ReactSwal.fire({
                    title: "پیام شدما ارسال شد",
                })
            }
        })
    }

    columns = [
        { field: 'status', headerName: 'وضعیت', width: 130,headerAlign: 'center', align:"right"},
        { field: 'sendMessage',
            headerName: 'ارسال پیام',
            sortable: false,
            renderCell:(phone)=> {
                return <Button onClick={()=>{this.sendMassage(phone.value)}} variant="outlined" color="primary" >ارسال پیام</Button>;
            },
            width: 150,
            headerAlign: 'center',
            align:"right"
        },
        { field: 'history',
            headerName: 'تاریخچه امانت',
            sortable: false,
            renderCell:()=> {
                return <Button onClick={()=>{ReactSwal.fire({title:"داریم روی این بخشش کار میکنیم" , icon:"info"})}} variant="outlined" color="primary" >تاریخچه امانت</Button>;
            },
            width: 150,
            headerAlign: 'center',
            align:"right"
        },
        { field: 'phone', headerName: 'شماره تماس', width: 150,headerAlign: 'center', align:"right"},
        { field: 'idCard', headerName: 'شماره عضویت', width: 150, headerAlign: 'center', align:"right"},
        { field: 'name', headerName: 'اسم', width: 150, headerAlign: 'center', align:"right"},
    ];

    createRows = (usersList) =>{
        return usersList.map(eR=>{
            return {
                id: eR.id,
                status: "فعال",
                sendMessage: eR.phone,
                history: "",
                phone: eR.phone ,
                idCard: eR.id_card,
                name: eR.name,
            }
        })
    }




    render() {
        return (
            <div className={"main-container-userList"}>
                <div className={"table-container"}>
                    <DataGrid rows={this.state.rows} columns={this.columns} pageSize={6} hideFooterSelectedRowCount/>
                </div>
            </div>
        );
    }
}

export default UsersList;