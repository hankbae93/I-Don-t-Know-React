export function getQuery(data) {
  let query = "?";
  console.log(data);
  for (const key of Object.entries(data)) {
    if (key[1]) {
      if (Array.isArray(key[1]) && key[1].length > 0) {
        console.log(key[1]);
        key[1].forEach((item) => {
          query += `${key[0]}=${item}&`;
        });
      } else {
        query += `${key[0]}=${key[1]}&`;
      }
    }
  }

  return query;
}

export function getAuthorList(data) {
  let newArr = [];
  data.forEach((item) => {
    newArr = newArr.concat(item.authors);
  });
  const filterd = new Set(newArr);
  return [...filterd];
}
