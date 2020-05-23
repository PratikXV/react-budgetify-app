import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';


const store = configureStore();
        console.log(store.getState());

store.dispatch(addExpense({description: 'Rent', amount: 4500, createdAt: 1000}));
store.dispatch(addExpense({description: 'Water Bill', amount: 1200, createdAt: 2000}));
store.dispatch(addExpense({description: 'EMI', amount: 1000, createdAt: 3000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const app = (
  <Provider store={store}>
  <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
