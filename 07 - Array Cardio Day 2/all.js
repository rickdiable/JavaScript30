// ## Array Cardio Day 2

const people = [{
        name: 'Wes',
        year: 1988
    },
    {
        name: 'Kait',
        year: 1986
    },
    {
        name: 'Irv',
        year: 1970
    },
    {
        name: 'Wes',
        year: 2015
    },
];

const comments = [{
        text: 'Love this!',
        id: 523423
    },
    {
        text: 'Super good',
        id: 823423
    },
    {
        text: 'You are the best',
        id: 2039842
    },
    {
        text: 'Ramen in my fav food ever',
        id: 123523
    },
    {
        text: 'Nice Nice Nice!',
        id: 542328
    }
]


// Some and Every Checks
// Array.prototype.some() // is at least one person 19?

// some() 會將 Array 中的資料逐筆進行判斷，只要有一筆通過判斷則回傳 true 並結束

// const isAdult = people.some(function (person) {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >= 19)
//         return true;
// })
// console.log(isAdult);


const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log(isAdult);

// Array.prototype.every() // is everyone 19?

// every() 會對 Array 中的每筆資料進行判斷，只要有一筆不符合則回傳 false 並結束

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log(allAdults);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for 
// find the comment with the ID of 823423

// find() 會將 Array 中的資料逐筆判斷，並回第一筆符合條件的資料 

// const comment = comments.find(function (comment) {
//     if (comment.id === 823423) {
//         return true;
//     };
// });

const comment = comments.find(comment => comment.id === 823423);

console.log(comment);



// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);
// comments.splice(index, 1);

// slice（）：不修改原數組，按照參數複製一個新數組，參數表述複製的起點和終點索引（省略則代表到末尾），但終點索引位置的元素不包含在內。

// find() 會對 Array 中的逐筆進行判斷，返回符合條件的索引值， 接著利用 spared (省略符號...)來進行展開陣列並透過slice()組合陣列， ...comments.slice(0, index),這段先將陣列開頭到索引值前的資料加進來， ...comments.slice(index + 1)這段則是將索引值+1後，延續到陣列結束的資料加進來。 slice()的第一個參數是陣列索引的起點，第二個是終點(且不會被使用)無填寫則是到結束。

// splice（）：原尺寸會被修改。第二個參數代表要刪除掉的元素個數，之後可選的參數，表示要替補被刪除位置的元素。

const newComments = [
    comments.slice(0, index),
    comments.slice(index + 1)
];

console.table(newComments);