
import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App'


ReactDOM.render(<App />, document.getElementById('app'));



/* alternative writing of the above
ReactDOM.render(
    <App />, // using our component
    document.getElementById('app') // remember you have a div '<div id="app"></div>' in your html file
);
*/

/*
ReactDOM.render(
    <>The awesome React in action</h1>, // rendering JSX
    document.getElementById('app') // getting the div with the id=app from the index.html file
);
*/
