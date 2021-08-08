## 1. 삼항 연산자

```js
* 😫 Bad Code
function getResult(score) {
    let result;
    if (score > 5) {
        result = '🤩';
    } else {
        result = '🤣';
    }
    return result
}

* 😍 Good Code
function getResult(score) {
    return score > 5 ? '🤩' : '🤣';
}
```

## 2. Nullish coalescing operator

```js
* 😫 Bad Code
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = 'Nothing to display';
    }
    console.log(message);
}

* 😍 Good Code
// function printMessage(text = 'Nothing to display')
// 디폴트 파라미터는 undefined인 경우만 사용가능. null의 경우 지나간다.
function printMessage(text) {
    const message = text ?? 'Nothing to display';
                 null / undefined 일 경우만 뒤의 값 할당 ()

    const check = text || 'every falsey data';
             모든 falsey 경우에 뒤의 값 할당

    console.log(message, check);
}
```

## 3. Object destructuring

```js
const person = {
    name: 'Julia',
    age: 20,
    phone: '0107777777'
};

* 😫 Bad Code
function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

* 😍 Good Code
function displayPerson(person) {
    const { name, age } = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}
```

## 4. Spread Syntax - Object

```js
// 두 객체를 합치는 좋은 방법은 무엇이 있을까?
const item = { type: '🍤', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

* 😫 Bad Code
item['price'] = detail.price;

* 😫 Bad Code
const newObj = new Object();
newObj['type'] = item.type;

* 😫 Bad Code
const newObj = {
    type: item.type,
    ...
}


* 😍 Good Code
const shirt0 = Object.assign(item, detail);

const shirt1 = { ...item, ...detail, price: 40 };
// 겹치는 키는 뒤의 값으로 overwrite 된다.
```

## 5. Spread Syntax - Object

```js
// 두배열 합치는 좋은방법
const name1 = ['진태', '철주', '린다만'];
const name2 = ['구용', '승배', '우주'];

* 😍 Good Code
const nameArr1 = name1.concat(name2);
const nameArr2 = [...name, ...name2];
```
