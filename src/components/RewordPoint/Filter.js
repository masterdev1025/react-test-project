import React from 'react';

class Filter extends React.Component {

    render() {
        return (
            <div className="filter-view">
                <div className="filter-item-view">
                    <label>Customer</label>
                    <select onChange={(e) => this.props.filterFun(e.target.value, "customer")} className="filter-sel">
                        <option value="all" >All</option>
                        {
                            this.props.customers && this.props.customers.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="filter-item-view">
                    <label>Year</label>
                    <select onChange={(e) => this.props.filterFun(e.target.value, "year")} className="filter-sel">
                        <option value="all">All</option>
                        {
                            this.props.years && this.props.years.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="filter-item-view">
                    <label>Month</label>
                    <select onChange={(e) => this.props.filterFun(e.target.value, "month")} className="filter-sel">
                        <option value="all">All</option>
                        {
                            Array(12).fill(null).map((i, index) => index + 1).map((item) => (
                                <option key={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Filter;