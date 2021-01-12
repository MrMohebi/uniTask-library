import $ from 'jquery';


export const BASE_URL = "https://api.devmrm.ir/";

export const login = (username,pass, callbackFunction)=>{
    $.post(BASE_URL+'login.php',{idCard:username, password:pass}).then(res =>{
        callbackFunction(res)
    })
}

export const signup = (name, idCard, password, phone, email, callbackFunction)=>{
    $.post(BASE_URL+'signup.php',{name, idCard, password, phone, email}).then(res =>{
        callbackFunction(res)
    })
}

export const getUserList = (callbackFunction)=>{
    $.post(BASE_URL+'getUserList.php').then(res =>{
        callbackFunction(res)
    })
}


export const getBooksList = (callbackFunction)=>{
    $.post(BASE_URL+'getBooksList.php').then(res =>{
        callbackFunction(res)
    })
}


export const addBook = (bookName, number, details, status, file,callbackFunction)=>{
    $.post(BASE_URL+'addBook.php', {bookName, number, details, status}).then(res =>{
        callbackFunction(res)
    })
}



export const reserveBook = (userId, bookId,callbackFunction)=>{
    $.post(BASE_URL+'reserveBook.php', {userId, bookId}).then(res =>{
        callbackFunction(res)
    })
}



export const getUserInfo = (userId,callbackFunction)=>{
    $.post(BASE_URL+'getUserInfo.php', {userId}).then(res =>{
        callbackFunction(res)
    })
}

