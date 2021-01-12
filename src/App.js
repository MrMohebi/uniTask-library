import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import Header from "./components/header/Header";
import Login from "./components/login/LoginPage";
import Signup from "./components/signup/SignupPage";
import SideBar from "./components/sidebar/Sidebar";
import FindBook from "./components/findBook/FindBook";
import NewBook from "./components/newBook/NewBook";
import UsersList from "./components/usersList/UsersList";
import BooksRate from "./components/booksRate/BooksRate";
import PayFine from "./components/payFine/PayFine";


function App() {
  return (
      <div>
        <BrowserRouter>
            <Header/>
            <SideBar/>
            <Route exact path='/' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/findBook' component={FindBook} />
            <Route path='/newBook' component={NewBook} />
            <Route path='/usersList' component={UsersList} />
            <Route path='/faveBooksList' component={BooksRate} />
            <Route path='/payFine' component={PayFine} />

        </BrowserRouter>
      </div>
  );
}

export default App;
