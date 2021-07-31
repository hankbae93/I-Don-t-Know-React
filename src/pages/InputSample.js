import React, { useState, useRef } from 'react';

//component
import { Container } from 'components/common/layout';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
        password: '',
    });
    const nameInput = useRef();

    // 여러 인풋 데이터 관리할때는 인풋의 name 프로퍼티를 활용하자
    const {
        name, nickname, password
    } = inputs;
    
    const onChange = (e) => {
        const { 
            value, name
        } = e.target;
        setInputs({
            ...inputs,
            [name]: value // name의 값을 키로 쓸 때  inputs[name]= value
        });
    };
  
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
            password: '',
        });
        nameInput.current.focus();
    };    
  
    return (
      <Container>
        <input 
            name="name"  
            ref={nameInput}
            value={name}
            onChange={onChange} 
            placeholder="이름" 
        />
        <input 
            name="nickname"
            value={nickname} 
            onChange={onChange} 
            placeholder="닉네임" 
        />
        <input 
            name="password"
            value={password} 
            onChange={onChange} 
            placeholder="비밀번호" 
            type="password" 
        />
        <button onClick={onReset}>초기화</button>

        {/*      
            Object.keys(obj) – 객체의 키만 담은 배열을 반환합니다.
            Object.values(obj) – 객체의 값만 담은 배열을 반환합니다.
            Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환합니다.   
        */}

        <div>
          {
            inputs &&
            Object.entries({...inputs}).map((item, idx) => {
                return (
                    <p key={"input" + idx}>
                        {item[0]} : <strong>{item[1]}</strong>
                    </p>
                )
            })
          }
        </div>
      </Container>
    );
};

export default InputSample;