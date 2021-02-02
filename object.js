const students = [
    {id:12, name:'abuilla'},
    {id:14, name:'abuilla khan'},
    {id:16, name:'abuilla mojomdar'},
    {id:18, name:'abuilla chowdhury'},
    {id:34, name:'abuilla parott'},
];

const names = students.map(s =>s.name);
const ids = students.map(s =>s.id);

//to check the highest number
const bigger = students.filter(s =>s.id>14);

const find = students.find(s =>s.id>14);

console.log(find);