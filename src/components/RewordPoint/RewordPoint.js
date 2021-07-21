import React from 'react';
//import cutome components;
import Filter from './Filter';
import Calculator from './Calculator';
import TransactionView from './TransactionView';

//import fake data;
import { customers } from '../../fakeData/customers.json';
import { years } from '../../fakeData/availableYears.json';
import { transactions } from '../../fakeData/transactions.json';
//import component style;
import './RewordPoint.css';
class RewordPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterCustomer: 'all',
            filterYear: 'all',
            filterMonth: 'all'
        }
    }
    handleFilter = (value, type) => {
        if (type === 'customer') {
            this.setState({
                filterCustomer: value
            })
        } else if (type === 'year') {
            this.setState({
                filterYear: value
            })
        } else if (type === 'month') {
            this.setState({
                filterMonth: value
            })
        }
    }
    arrayFilter = (array, params) => {
        return [...array.filter((item) => {
            if (params.filterCustomer !== 'all' && Number(params.filterCustomer) !== item.customer_id) return false;
            if (params.filterYear !== 'all' && item.timestamp.split('-').length === 3 && Number(item.timestamp.split('-')[0]) !== Number(params.filterYear)) return false;
            if (params.filterMonth !== 'all' && item.timestamp.split('-').length === 3 && Number(item.timestamp.split('-')[1]) !== Number(params.filterMonth)) return false;
            return true;
        })];
    }
    render() {
        return (
            <div className="app-container">
                <Filter filterFun={this.handleFilter} customers={customers} years={years} />
                <Calculator {...this.state} transactions={transactions} arrayFilterFun={this.arrayFilter} />
                <TransactionView {...this.state} transactions={transactions} arrayFilterFun={this.arrayFilter} />
            </div>
        )
    }
}

export default RewordPoint;