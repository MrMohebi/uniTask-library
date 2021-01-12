import React, {useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button, TextField, Input}  from "@material-ui/core";
import "./css/style.css"
import * as requests from "../../apiRequests/requests"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const ReactSwal = withReactContent(Swal)

function url2paramsArray(search){
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

class FindBook extends React.Component{
    state={
        booksList:[],
        rows:[],
        searchBookName:"",
    }



    componentDidMount() {
        requests.getBooksList((res)=>{
            console.log(res);
            if(res.statusCode === 200){
                this.setState({
                    rows:this.createRows(res.data),
                    booksList:res.data,
                })
            }
        })
    }

    reserveBook = (bookId) =>{
        let urlParams = url2paramsArray(this.props.location.search.replace("?", ""))
        requests.reserveBook(urlParams.login, bookId,(res)=>{
            console.log(res);
            if(res.statusCode === 200){
                ReactSwal.fire({
                    title: 'رزرو شد',
                    icon: 'success',
                    text:"کتاب شما با موفقیت رزور شد جهت دریافت به کتابخانه مراجعه کنید",
                    confirmButtonText: "تایید",
                })
            }
        })

    }


    columns = [
        { field: 'bookOrder',
            headerName: 'رزرو',
            sortable: false,
            renderCell:(bookO)=> {
                return <Button onClick={()=>(this.reserveBook(bookO.value.id))} variant="outlined" color="primary" >{bookO.value.stock}</Button>;
            },
            width: 100,
            headerAlign: 'center',
            align:"right"
        },
        { field: 'bookStatus', headerName: 'وضعیت', width: 100,headerAlign: 'center', align:"right"},
        { field: 'bookDetails', headerName: 'توضیحات', width: 500, headerAlign: 'center', align:"right"},
        { field: 'bookName', headerName: 'نام کتاب', width: 100, headerAlign: 'center', align:"right"},
     ];

    createRows = (bookList) =>{
        return bookList.map(eR=>{
            return {
                id: eR.id,
                bookOrder: eR,
                bookStatus: eR.status ? "قابل رزرو" : "غیر فعال",
                bookDetails: eR.details,
                bookName: eR.name,
            }
        })
    }


    handleChangeSearchBox = (elem) =>{
        let searchStr = new RegExp(elem.target.value);

        this.setState({
            searchBookName:elem.target.value,
            rows: this.createRows(this.state.booksList.map(eB=>{
                if(eB.name.search(searchStr) >= 0)
                    return eB;
                else
                    return null;
            }).filter(eI=> eI !== null)),

        })
    }



    render() {
        return (
            <div className={"main-container-findBook"}>
                <div className="search-bar">
                    <TextField onChange={this.handleChangeSearchBox} label="جست و جو" variant="outlined" />
                </div>
                <div className={"table-container"}>
                    <DataGrid rows={this.state.rows} columns={this.columns} pageSize={6} hideFooterSelectedRowCount/>
                </div>
            </div>

        );
    }


}

export default FindBook;
