console.log("Hari Om!");
// JSX - JavaScript XML
// var template = <p> This is a template rendered from app.js </p>;
var template = React.createElement(
    "p",
    null,
    " This is a template rendered from app.js "
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);