import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import HelpPage from './components/HelpPage';
import NotFound from './components/NotFound';
import Header from './components/Header';

export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact={true} />
                        <Route path="/add" component={AddExpensePage} />
                        <Route path="/edit/:id" component={EditExpensePage} />
                        <Route path="/help" component={HelpPage} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
