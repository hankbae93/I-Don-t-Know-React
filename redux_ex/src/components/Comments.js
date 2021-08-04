import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../redux';

const Comments = ({ comments, fetchComments, loading }) => {
    useEffect(() => {
       fetchComments()
    }, [])

    const commentsItems = loading 
    ? (<div>is Loading...</div>) 
    : (
        comments.map(comment => {
            return <div key={comment.id} >
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        })
    )

    return (
        <div className="comments">
            {commentsItems}
        </div>
    );
};

const mapStateToProps = ({ comments }) => {
    return {
        comments: comments.items,
        loading: comments.loading
    }
}

const mapDispatchToProps = {
    fetchComments: fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);