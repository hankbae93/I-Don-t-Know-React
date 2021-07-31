import React, { useState, useRef } from 'react';

// component
import InputSample from 'components/InputSample';
import UserList from 'components/UserList';
import CreateUser from 'components/CreateUser';

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

  /*
  useRef의 용도
  1. 특정 DOM을 선택해야할 때
  2. 컴포넌트안에서 조회 및 수정할 수 있는 변수 관리 
  => state와 다르게 값이 변한다고 해서 리렌더링 되지않는다
  => ref.current로 조회와 업데이트 

  setTimeout, setInterval 을 통해서 만들어진 id
  외부 라이브러리를 사용하여 생성된 인스턴스
  scroll 위치
  */

  const nextId = useRef(4); 
  const onCreate = () => {
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
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id 
        ? {
          ...user, 
          active: !user.active 
        } : user
      )
    )
  };

  const registerState = {
    username, email, onChange, onCreate 
  };  

  return (
    <div className="App">
      {/* <InputSample /> */}
      <CreateUser {...registerState} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
