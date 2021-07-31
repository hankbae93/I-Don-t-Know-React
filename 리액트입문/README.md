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
전체 컴포넌트 중 키가 아이템의 id인 컴포넌트만 리렌더링한다.
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
