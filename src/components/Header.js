import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Budgetify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/add" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    );
};

export default Header;