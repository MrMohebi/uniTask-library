import React, {Component} from 'react';
import {Button, InputAdornment, TextField, Select, MenuItem, InputLabel} from "@material-ui/core";
import {
    CloudUpload,
    BookOutlined,
    CollectionsBookmarkOutlined,
    DescriptionOutlined,
} from "@material-ui/icons";
import "./css/style.css"
import * as requests from "../../apiRequests/requests"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const ReactSwal = withReactContent(Swal)



class NewBook extends Component {
    state={
        bookName:"",
        number:"",
        details:"",
        status:"",
    }

    handleSubmitNewBook = (elem) =>{
        elem.preventDefault();
        requests.addBook(this.state.bookName, this.state.number, this.state.details, this.state.status, "" ,(res)=>{
            console.log(res)
            if(res.statusCode === 200){
                ReactSwal.fire({
                    title: ' با موفقیت انجام شد',
                    icon: 'success',
                    confirmButtonText: "تایید",
                })
            }
        })
    }


    render() {
        return (
            <div className={'main-container-newBook'}>
                <div className={"newBook-header"}>ثبت کتاب</div>
                <div className={"up-shape"}/>
                <div dir={'rtl'} className={'bookName-inp'}>
                    <TextField
                        onChange={(elem)=>{this.setState({bookName:elem.target.value})}}
                        label="نام کتاب"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <BookOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div dir={'rtl'} className={'m-3'}>
                    <TextField
                        onChange={(elem)=>{this.setState({number:elem.target.value})}}
                        type={"number"}
                        label="تعداد موجود"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <CollectionsBookmarkOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div dir={'rtl'} className={'m-3'}>
                    <TextField
                        onChange={(elem)=>{this.setState({details:elem.target.value})}}

                        label="توضیحات"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <DescriptionOutlined/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div dir={'rtl'} className={'status-inp'}>
                    <InputLabel id="status-label">وضعیت</InputLabel>
                    <Select
                        onChange={(elem)=>{this.setState({status:elem.target.value})}}
                        labelId='status-label'
                        defaultValue={true}
                    >
                        <MenuItem value={false}>غیر فعال</MenuItem>
                        <MenuItem value={true}>فعال</MenuItem>
                    </Select>
                </div>

                <div dir={'rtl'} className={'upload-inp'}>
                    <input
                        style={{display:"none"}}
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button startIcon={<CloudUpload />} variant="contained" color="primary" component="span">
                            اپلود
                        </Button>
                    </label>
                </div>

                <div className="submit-btn">
                    <Button onClick={this.handleSubmitNewBook} variant="contained" color="primary">تایید</Button>
                </div>
            </div>
        );
    }
}

export default NewBook;