import React from 'react';
import { connect } from 'react-redux';

const Display = ({ count }) => {
    return (
        <div>
            <p>구독자 수 : {count}</p>
        </div>
    );
}

const mapStateToProps = ({ subscribers }) => {
    return {
        count: subscribers.count // => props로 전달이 됨
    }
}

export default connect(mapStateToProps)(Display);