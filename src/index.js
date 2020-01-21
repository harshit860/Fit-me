import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './redux/reducer';
import { Provider } from "react-redux";
import { createStore } from "redux";



const main_store = createStore(data)

ReactDOM.render(
    <Provider store={main_store}>
        <App />
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
