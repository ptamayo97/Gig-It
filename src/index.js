import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './store/reducers';

// This is how a middleware is applied
const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
