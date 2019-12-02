import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = dispatch => ({
    ADD1: () => dispatch({ type: "ADD1" }),
    REMOVE1: () => dispatch({ type: "REMOVE1" }),
    ADD10: () => dispatch({ type: "ADD10" }),
    REMOVE10: () => dispatch({ type: "REMOVE10" }),
    RESET: () => dispatch({ type: "RESET" })
})

const CounterComponent = ({ count, ADD1, REMOVE1, ADD10, REMOVE10, RESET }) => (
    <div>
        <p>{count}</p>
        <button onClick={ADD1}>+1</button>
        <button onClick={REMOVE1}>-1</button>
        <button onClick={ADD10}>+10</button>
        <button onClick={REMOVE10}>-10</button>
        <button onClick={RESET}>Reset</button>
    </div>);
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)