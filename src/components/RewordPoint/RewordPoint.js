import React from 'react';
//import cutome components;
import Filter from './Filter';
import Calculator from './Calculator';
import TransactionView from './TransactionView';

//import fake data;
import { customers } from '../../fakeData/customers.json';
import { years } from '../../fakeData/availableYears.json';
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
        if (type == 'customer') {
            this.setState({
                filterCustomer: value
            })
        } else if (type == 'year') {
            this.setState({
                filterYear: value
            })
        } else if (type == 'month') {
            this.setState({
                filterMonth: value
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <Filter filterFun={this.handleFilter} customers={customers} years={years} />
                <Calculator {...this.state} />
                <TransactionView {...this.state} />
            </React.Fragment>
        )
    }
}

export default RewordPoint;