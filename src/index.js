import React from "react";
import ReactDOM from 'react-dom';
import Main from "./components/Main";

const li = ["bonjour", "ca va?"];
const title = "Hello World";

ReactDOM.render(<Main title={title} li={li}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
