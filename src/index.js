import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Counter />
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));