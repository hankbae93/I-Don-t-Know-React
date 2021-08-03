import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import useAsync from 'useAsync';

const testIp = 'https://jsonplaceholder.typicode.com/users';

// useAsync에서는 promise를 바로 data에 담아서 
// 요청을 한 이후에 reponse에서 data 추출 반환 

async function getUsers() {
  const response = await axios.get(testIp);
  return response.data;
}

function App() {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state;  // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null

  return (
    <div className="App">
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              {user.username} ({user.name});
            </li>
          ))
        }
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </div>
  );
}

export default App;
