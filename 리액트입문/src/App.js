import React, { useState, useRef, useMemo, useCallback } from 'react';

// component
import InputSample from 'components/InputSample';
import UserList from 'components/UserList';
import CreateUser from 'components/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });  
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'RanjaFunc',
      email: 'RanjaFunc@gmail.com',
      active: false
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
  ]);

  const { 
    username, email
   } = inputs;

  const onChange = e => {
    const { 
      name, value
    } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };
  
  const nextId = useRef(4); 
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // spread 연산자 / users.concat(user) 등등 

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(
      users.map(user => 
        user.id === id 
        ? {
          ...user, 
          active: !user.active 
        } : user
      )
    )
  }, [users]);
  
  const count = useMemo(() => countActiveUsers(users), [users]);  

  const registerState = {
    username, email, onChange, onCreate 
  };  

  return (
    <div className="App">
      {/* <InputSample /> */}
      <CreateUser {...registerState} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
