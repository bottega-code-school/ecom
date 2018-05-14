import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore));

// import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";

//installed components

//our components
import Home from "./components/home";
import Signup from "./components/auth/signup";
import Signin from "./components/auth/signin";

import UserInfo from "./components/userInfo/userInfo";
import PurchaseHistory from './components/userInfo/purchaseHistory';
import AccountInformation from './components/userInfo/accountInformation';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
         
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />

          <Route path="/user-info" component={UserInfo}/>
          <Route path="/user-info/purchase-history" component={PurchaseHistory}/>
          <Route path="/user-info/account-information" component={AccountInformation}/>
          
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
