# 리액트에서 key가 중요한 이유 ?

```js
const array = ['a', 'b', 'c', 'd'];

b와 c 사이에 z를 넣을 때 생기는 일

=> 기존의 c 가 z 로바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입됩니다.

그 다음에 a 를 제거하게 된다면, 기존의 a 가 b 로 바뀌고, b 는 z 로 바뀌고,

z는 c로 바뀌고, c는 d 로바뀌고, 맨 마지막에 있는 d 가 제거됩니다.
```

## 1. 배열이 업데이트 될 때 key를 줘야 되는 이유

```js
리액트는 똑똑하게 기존 키들의 값이 바뀌지 않았다면 새로 추가된 키와 값만 리랜더한다. 기존 키의 값이 변경됐다면 그 키의 값만 리렌더링 된다.

const [list, setList] = useState([
    {id:0, title: 'hello!', content:'word'},
    {id:1, title: 'myname!', content:'is!'},
    {id:2, title: 'lee!', content:'yong!'},
    {id:3, title: 'jun!', content:'blabla!'}
]);

{
    list.map((item, idx) => {
        return (
            <div key={item.id}>
                {item.title} - <small>{item.content}</small>
            </div>
        )
    })
}

이 단계에서 id가 0인 아이템의 title을 'hi'로 바꾼다면?
setList([
    {id:0, title: 'hi!', content:'word'},
    {id:1, title: 'myname!', content:'is!'},
    {id:2, title: 'lee!', content:'yong!'},
    {id:3, title: 'jun!', content:'blabla!'}
])

리액트는 각 키의 요소들이 바뀐 부분이 있는지 확인 ->
id가 0인 요소의 title이 바뀐 것을 확인 ->
전체 컴포넌트 중 키가 id: 0인 아이템 컴포넌트만 리렌더링한다.
```

## 2. map 함수의 index로 key를 줄 때 곤란한 이유

```js
const [list, setList] = useState([
    {id:0, title: 'hello!', content:'word'},
    {id:1, title: 'myname!', content:'is!'},
    {id:2, title: 'lee!', content:'yong!'},
    {id:3, title: 'jun!', content:'blabla!'}
]);

{
    list.map((item, idx) => {
        return (
            <div key={idx}>
                {item.title} - <small>{item.content}</small>
            </div>
        )
    })
}

이 단계에서 id가 0인 아이템을 중간에 넣고 싶어졌다

setList([
    {id:1, title: 'myname!', content:'is!'},
    {id:0, title: 'hi!', content:'word'},
    {id:2, title: 'lee!', content:'yong!'},
    {id:3, title: 'jun!', content:'blabla!'}
])

이러는 순간 리액트는 인덱스 0번의 요소의 값이 통째로 바뀌는 걸 확인
-> 이때부터 배열이 순서가 바뀐건지 ,값만 바꾼건지, id를 바꾼건지 판단할 수 없음
-> 전체 배열이 통째로 바뀌었다고 판단해 모든 컴포넌트가 불필요하게 리렌더링된다
```

# useRef란?

    1. 특정 DOM을 선택해야할 때
    2. 컴포넌트안에서 조회 및 수정할 수 있는 변수 관리
    => state와 다르게 값이 변한다고 해서 리렌더링 되지않는다
    => ref.current로 조회와 업데이트

    - setTimeout, setInterval 을 통해서 만들어진 id
    - 외부 라이브러리를 사용하여 생성된 인스턴스
    - scroll 위치

# useEffect란?

```jsx
useEffect(() => {
    console.log('화면에서 나타남!');

    // cleanup 함수, 컴포넌트가 사라질 때 함수를 리턴하고 호출된다
    return () => {
        console.log('화면에서 사라짐');
    }
}, [])

1. 첫번째 파라미터 : 호출할 함수
2. 두번째 파라미터 (deps) : 의존값이 들어있는 배열
deps 안에 props나 상태를 넣지 않게 된다면 최신 props/ 상태 가리킬 수 없음
```

## 1. 주로 마운트 시 하는 작업들

    props 로 받은 값을 컴포넌트의 로컬 상태로 설정

    외부 API 요청 (REST API 등)

    라이브러리 사용 (D3, Video.js 등...)

    setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

## 2. 주로 언마운트 시 하는 작업들

    setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)

    removeEventListener

    라이브러리 인스턴스 제거

# useMemo란?

```jsx
const count = useMemo(() => {
    countActiveUsers(users);
}, [users]);

deps 배열에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산하고

바뀌지 않았다면 이전에 "연산된 값"을 재사용
```

# useCallback이란?

```jsx
const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
}, [users]);

"특정 함수"를 새로 만들지 않고 재사용하고 싶을때 사용합니다.
deps안에는 꼭 해당 상태나 props를 넣어줘야 최신 값을 참조합니다.
```
