import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actionCreator';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { dispatch } = this.props;

        if(e.target.id === 'INC') {
            dispatch( increment() );
        } else {
            dispatch( decrement() );
        }
    }

    render() {
        const { count } = this.props;
        return (
            <div>
            {count}
            <button id='INC' onClick={this.handleClick}>INC</button>
            <button id='DEC' onClick={this.handleClick}>DEC</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count:  state.count
    };
}

export default connect(mapStateToProps)(Counter);