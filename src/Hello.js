import React from 'react';

class Hello extends React.Component {
    render () {
        return (
            <div>
                <p>Hello {this.props.name}!</p>
                <p>Today is {this.props.day}, {this.props.date}.</p>
            </div>
        );
    }
}

export default Hello;