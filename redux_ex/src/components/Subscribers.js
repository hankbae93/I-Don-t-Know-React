import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux';

const Subscribers = ({ count, addSubscriber }) => {
    return (
        <div className="items">
            <h2>구독자 수 : {count}</h2>
            <button onClick={() => addSubscriber()}>구독하기!</button>
        </div>
    );
}

const mapStateToProps = ({ subscribers }) => {
    return {
        count: subscribers.count // => props로 전달이 됨
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//         // dispatch({ type: ADD_SUBSCRIBER })
//     }
// }
const mapDispatchToProps = {
    addSubscriber: addSubscriber
}


export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);