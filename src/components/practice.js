import React from 'react';

class Practice extends React.Component {
    state = {
            count: 0

    }
    onInc = () => {
        this.setState({count: this.state.count + 1})
    }
    onDec = () => {
        this.setState({count: this.state.count - 1})
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <div>{count}</div>
                <button onClick = {this.onInc}>Ad +1</button>
                <button onClick = {this.onDec}>Minuus -1</button>
            </div>
        )
    }
}

export default Practice;