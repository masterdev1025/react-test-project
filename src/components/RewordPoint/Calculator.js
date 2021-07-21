import React from 'react';

class Calculator extends React.Component {
    calculator = () => {
        if (this.props.transactions) {
            var points = 0;
            const data = this.props.arrayFilterFun(this.props.transactions, { ...this.props });
            for (let i = 0; i < data.length; i++) {
                const purchase = Number(data[i].purchase);
                if (purchase > 100) {
                    points += (purchase - 100) * 2 + 50;
                } else if (purchase > 50) {
                    points += (purchase - 50);
                }
            }
            return points;
        }
        return 0;

    }
    render() {
        return (
            <div className="calculator-view">
                {
                    this.calculator()
                }
            </div>
        )
    }
}

export default Calculator;