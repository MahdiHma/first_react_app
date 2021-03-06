import React from "react";
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import "./styles/stylesheet.css"
import {BrowserRouter} from 'react-router-dom'

const title = "PhotoWall";


ReactDOM.render(<BrowserRouter><Main title={title}/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
