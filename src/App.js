import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./Redux/store";
import Products from "./components/Products/Products";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/:category?' component={Products}/>
            </Switch>
        </div>
    );
};

const TestTaskApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
};

export default TestTaskApp;
