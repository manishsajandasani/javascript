const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

console.log("======== Convert to JSON string ========");
console.log(post);
const str = JSON.stringify(post);
console.log(str);
console.log(str.id);
console.log(str["id"]);

console.log("======== Parse JSON ========");
const obj = JSON.parse(str);
console.log(obj.id);

console.log("======== JSON & Arrays ========");
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];
const str2 = JSON.stringify(posts);
console.log(str2);
console.log(str2[1]);
let str3 = JSON.parse(str2);
console.log(str3[1]);
console.log(str3[1].title);
