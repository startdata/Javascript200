const studentList = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87},
    {name: 'jihyun', age: 31, math: 95, english: 97},
    {name: 'misup', age: 35, math: 76, english: 84},
    {name: 'dasom', age: 35, math: 84, english: 73},
    {name: 'yuna', age: 26, math: 54, english: 67},
    {name: 'mattheue', age: 29, math: 34, english: 100},
];



studentList.sort((beforesStudent, nextStudent) => {
    if(beforesStudent.age > nextStudent.age) return 1;
    else if (beforesStudent.age < nextStudent.age) return -1;
    else if (beforesStudent.math > nextStudent.math) return -1;
    else if (beforesStudent.math < nextStudent.math) return 1;
    return 0
});

console.log(studentList);