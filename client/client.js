const res = await fetch('http://localhost:5000/api');
const data = await res.json();
console.log(data);
