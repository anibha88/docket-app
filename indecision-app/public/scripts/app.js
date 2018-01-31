"use strict";

console.log("Hari Om!");
// JSX - JavaScript XML
var template = React.createElement(
  "h1",
  null,
  " Hari Sarvothama Vaayu Jeevothama "
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
