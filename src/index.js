import React from "react";
import ReactDom from "react-dom";

const myName = "Артем Рахимов";
const title = <h1>Hello world меня зовут {myName}</h1>;

ReactDom.render(title, document.getElementById("root"));
