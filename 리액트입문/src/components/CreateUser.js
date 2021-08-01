import React from 'react';
import {
    Container
} from 'components/common/layout';

const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
        <Container>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </Container>
  );
};

export default React.memo(CreateUser);