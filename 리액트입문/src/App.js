import React, { useState, useRef, useMemo, useCallback, useReducer } from 'react';

// component
import InputSample from 'components/InputSample';
import UserList from 'components/UserList';
import CreateUser from 'components/CreateUser';
import Counter from 'components/Counter';
import useInput from 'hooks/useInput';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT': 
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
    
  }
}

function App() {  
  const [{ username, email }, onChange, reset] = useInput({
    username: '',
    email:''
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;  

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username, 
        email
      }
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset])

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);
  
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="App">
      {/* <InputSample /> */}
      <CreateUser 
      username={username} 
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList 
      users={users}
      onToggle={onToggle}
      onRemove={onRemove}
      />
      <div>활성 사용자 수 : {count}</div>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
