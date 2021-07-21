import React from 'react';

class TransactionView extends React.Component {
    render() {
        return (
            <div className="transaction-view">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Purchase</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.transactions && this.props.arrayFilterFun(this.props.transactions, { ...this.props }).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.customer_name}</td>
                                    <td>{item.purchase}</td>
                                    <td>{item.timestamp}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default TransactionView;