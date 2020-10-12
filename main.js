// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

let arr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
let max = Math.max.apply(null, arr);
console.log(max);

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. 
// Створити новий масив де будуть тільки Стрінгові значення.
let arr2 = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];

let stringArr = [];
string = () => {
  for (j = 0; j < arr2.length; j++) {
    if(typeof arr2[j] === 'string') {
      arr2[j] = str;
      stringArr.push(str);
    }
  }
}
console.log(stringArr);

// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, 
// {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, 
// {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – 
// Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. 
// Додати можливість додати нове поле для всіх юзерів – job (true/false);
let collection = [
  {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, 
  {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, 
  {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}
];

users = () => {
  for (k = 0; k < collection.length; k++) {
    if (collection[k].type === 'user') {
      console.log(collection[k].name);
    };
  };
};
users();

hobby = () => {
  for (n = 0; n < collection.length; n++) {
      if (collection[n].hobby === 'hiking') {
        console.log(collection[n].name);
    };
  };
};
hobby();




// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки
// (додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.
let content = document.getElementById('content');
let p = document.createElement('p');
p.innerText = 'Some text';
content.appendChild(p);


// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. 
// Вивести нумерований список з іменами всіх країн та її столицею на сторінку, 
// назву країни зробити великими буквами.
