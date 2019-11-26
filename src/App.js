import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./Redux/store";
import Products from "./components/Products/Products";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route path='/products/:category?' component={Products}/>
        </div>
    );
};

const TestTaskApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
};

export default TestTaskApp;
