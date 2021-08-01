import React, { useEffect } from 'react';

// component
import { Container } from 'components/common/layout';

const User = React.memo(({ user, onRemove, onToggle }) => {
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');

        return () => { // cleanup 함수 : deps가 비어있을때 컴포넌트가 사라지면 호출된다
            console.log('컴포넌트가 화면에서 사라짐')
        }
    }, [user])

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b> 
            
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

const UserList = ({ users, onRemove, onToggle }) => {
    return (
        <Container>         
            {
                users.map(user => {
                    return <User 
                    onRemove={onRemove} 
                    user={user} 
                    key={user.id}
                    onToggle={onToggle}
                    />
                })
            }
        </Container>
    );
};

export default React.memo(UserList);