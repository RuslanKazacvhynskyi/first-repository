// var a = prompt('Ваше имя');
 // alert('Привет ' + a);
// var a = 1;
// var b = 2;
// a = 5
// a > b
// console.log(a > b);
// var d = 'text';
// alert( typeof d);


// switch--case


// var a = new Date().getDate();
// console.log(a)

// switch (a) {
// case 0:
//     console.log('Воскресенье');
// break;
// case 1:
//     console.log('Понедельник')
// break;
//     case 1:
//     console.log('Вторник')
// break;
// case 1:
//     console.log('Среда')
// break;
// case 1:
//     console.log('Четверг')
// break;
// case 1:
//     console.log('Пятница')
// break;
// case 1:
//     console.log('Суббота')
    
// default: console.error('Это не день неделе')
// }

// switch--case

// if--else

// if (a === 0) {
// console.log('Воскресенье');
// }
// else if (a === 1) {
// console.log('Понедельник');
// }
// else if (a === 2) {
//     console.log('Вторник');
// }
// else if (a === 3) {
//     console.log('Среда');
// }
// else if (a === 4) {
//     console.log('Четверг');
// }
// else if (a === 5) {
//     console.log('Пятница');
// }
// else if (a === 6) {
//     console.log('Суббота');
// }
// else {
// console.error('Это не день недели')
// }

// if--else

// Тернальный оператор

// if ('условия') {
// что-то делаем}
// else {не прошли проверку}

// var a = prompt ('Ваше имя')
// a ? console.log ('Привет, ' + a) : console.error ('Имя не указано')

// Тернальный оператор





// Задача 1

// var a = 1;
// if (a === 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = 0;
// if (a === 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = -3;
// if (a === 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// Задача 1

// Задача 2

// var a = 1;
// if (a > 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = 0;
// if (a > 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = -3;
// if (a > 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// Задача 2

// Задача 3

// var a = 1;
// if (a < 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = 0;
// if (a < 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = -3;
// if (a < 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// Задача 3

// Задача 4

// var a = 1;
// if (a >= 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = 0;
// if (a >= 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = -3;
// if (a >= 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// Задача 4

// Задача 5

// var a = 1;
// if (a != 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = 0;
// if (a != 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = -3;
// if (a != 0) {
// console.log('Верно');}
// else {console.error('Неверно!');}

// Задача 5

// Задача 6

// var a = 'test';
// if (a === 'test') {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = 'текст';
// if (a === 'test') {
// console.log('Верно');}
// else {console.error('Неверно!');}

// var a = 3;
// if (a === 'test') {
// console.log('Верно');}
// else {console.error('Неверно!');}

// Задача 6

// Задача 7

// var num = 1;
// var result;
// console.log(result)
// switch (num) {
// case 1:
//     result = 'зима';
//     break;
// case 2:
//     result = 'весна';
//     break;
// case 3:
//     result = 'лето';
//     break;
// case 4:
//     result = 'Осень';
//     break;
// default:
//     result = null;    
// }
// console.log(result)

// Задача 7

// Задача 8

// var day = 41;

// if (day <= 10) {
// console.log('1 Декада');
// }
// else if (day <= 20) {
// console.log('2 Декада');
// }
// else if (day <= 31) {
// console.log('3 Декада');
// }
// else {console.log('День больше 31')}

// Задача 8

// Задача 9

// var month = +prompt('Введите число от 1 до 12');
// if (month >= 1 && month <= 12) {
// switch (month) {
// case 1:
// case 2:
// case 12:
//     alert('Это зима!')
//     break;
// case 3:
// case 4:
// case 5:
//     alert('Это весна!')
//     break;
// case 6:
// case 7:
// case 8:
//     alert('Это лето!')
//     break;
// case 9:
// case 10:
// case 11:
//     alert('Это осень!')
//     break;
// }
// }
// else {console.error('Вы ввели другое число')}

// Задача 9










// Функции---------------

// function myGreeting(name) {
// console.log('Hello, ' + name + '!');
// }
// myGreeting('Ruslan');

// Калькулятор

// function plus(a, b) {
// console.log(a + b);}
// plus(1, 2,);


// function plus() {
//     var a = +prompt('Введите первое число!');
//     var b = +prompt('Введите второе число!');
// console.log(a + b);}
// plus();


// var a = +prompt('Введите первое число!');
// var b = +prompt('Введите второе число!');
// function calc() {
// plus (a, b);
// minus (a, b);
// multiply (a, b);
// }
// function plus(a, b) {
//   console.log (a + b);}
// function minus(a, b) {
//   console.log (a - b);}
// function multiply(a, b) {
//   console.log (a * b);}
// calc();


// let text = 'abc';
// let lenght = text.length;
// console.log(lenght);


// Количество символов--------------- 

// var userName = prompt('Enter your name');
// checkName(userName);

// function greetins(name) {
// alert('Hello ' + name);
// }

// function shortName() {
// alert('Your name is too short!');
// userName = prompt('Enter your REAL name');
// checkName(userName);
// }

// function checkName(name) {
// name.length >=2 ? greetins(name) : shortName();
// }



// checkName();

// function greetins(name) {
// alert('Hello ' + name);
// }

// function shortName() {
// alert('Your name is too short!');
// checkName();
// }

// function checkName() {
// var userName = prompt('Enter your name');
// userName.length >=2 ? greetins(userName) : shortName();
// }

// Количество символов---------------

// Обрезка----------------

// let text = 'Apple, Banana, Kiwi';
// let part = text.slice(7, 13);
// console.log(part);

// Замена текста-----------------

// let text = 'pleace visit Microsoft! Microsoft is cool!';
// let newText = text.replace ("Microsoft", "W3Schools");
// console.log(newText);

// let text = 'pleace visit Microsoft! Microsoft is cool!';
// let newText = text.replaceAll ("Microsoft", "W3Schools");
// console.log(newText);

// Замена текста-----------------

// Обьединения-------------

// let text1 = "Hello";
// let text2 = "World";
// let text4 = "!"
// let text3 = text1.concat(" ", text2, text4);
// console.log(text3);

// Обьединения-------------

// проверка начинается ли строка с какого либо значения------------------

// var tel = prompt('Enter your phone number');
// checkPhoneNumber(tel);
// function checkPhoneNumber(number) {
// if (number.startsWith('+38')) {
// console.log('Correct format! ' + number);}
// else {console.log('your number in correct format: +38' + number.replaceAll(' ', '-'));}
// }

// проверка начинается ли строка с какого либо значения------------------

// функция возвращаюшаю с заглавным первым символом--------------------

// var text = prompt('Enter something');
// ucFirst(text);
// function ucFirst(str) {console.log(str[0].toUpperCase() + str.slice(1));}

// функция возвращаюшаю с заглавным первым символом--------------------

// Функция замены слов-----------------

// function checkSpam(str) {
// if (str.includes('viagra') || str.includes('XXX')) {
// console.log(true);
// console.log(str.replaceAll('viagra', '###').replaceAll('XXX', '***'));}

// else { console.log(false);}
// }

// var spamTextOne = 'Loren ipsum dolor sit.';
// var spamTextTwo = 'viagra Loren ipsum viagra sit.';
// var spamTextThree = 'Loren XXX ipsum dolor sit.viagra ';

// checkSpam(spamTextOne);
// checkSpam(spamTextTwo);
// checkSpam(spamTextThree);


// Функция замены слов-----------------

// Функция обрезать----------------

// function truncate(str, maxlength) {
// if (str.length > maxlength) {
// console.log(str.slice(0, maxlength) + '...');}
// else {console.log(str);}
// }
// truncate('123456789' , 5);

// Функция обрезать----------------

// Функция которая извлекает только числовое значение из строки------------------------

// var usd = '120 $';
// var uah = '120 uah';

// function exctractCurrencyValue(str) {
// console.log(parseInt(str));}

// exctractCurrencyValue(usd);
// exctractCurrencyValue(uah);

// Функция которая извлекает только числовое значение из строки------------------------


// Функция рондом-------------------

// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lenght = alphabet.length;

// function generateRandomLetter() {

// console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);
// }
// generateRandomLetter();

// Функция рондом-------------------








// Циклы---------------------------

// var cars = ['BMW', 'Volvo', 'Saab', 'Ford',];
// for (i = 0; i <= cars.length; i++) {
// console.log(cars[i]);}

// строка в массив-------------

// var a = 'abcd'
// console.log(a.split(''));

// строка в массив-------------

// массив в строку-------------

// var a = 'abcd'
// console.log(a.split('').join('-*-'));

// массив в строку-------------

// Циклы---------------------------







// ------------------МЕТОДЫ--------------

// метод удаления и добавления посднего элемента из массива------------------------

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let lastFruits =fruits.pop()
// fruits.push('Kiwi')
// console.log(fruits, lastFruits);

// метод удаления и добавления посднего элемента из массива------------------------

// метод удаления и добавления первого элемента из массива------------------------

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let firstFruits =fruits.shift();
// console.log(fruits, firstFruits);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift('Lemon');
// console.log(fruits);

// метод удаления и добавления первого элемента из массива------------------------

// метод замены элемента из массива на другой------------------------

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits [0] = ('Lemon');
// console.log(fruits);


// метод замены элемента из массива на другой------------------------

// метод обьединения массивов---------------------

// let myGirls = ["Cecilie", "Lone"];
// let myBoys = ["Emil", "Tobias", "Linus"];

// let myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// метод обьединения массивов---------------------

// метод добавления элемента в массив------------------------



// метод добавления элемента в массив------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// метод удаления элемента из массива-----------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2);
// console.log(fruits);

// метод добавления элемента в массив------------------------

// метод отрезает кусок массива и преврощает его в новый массив------------------------

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1);
// console.log(fruits, citrus);

// метод отрезает кусок массива и преврощает его в новый массив------------------------

// медод переворота строки--------------------

// var myString = 'abcde';
// function reverseString(str) {
// return str.split('').reverse('').join(''); }

// console.log(reverseString(myString));

// медод переворота строки--------------------

// Функция которая очищает массив от нежелательных значений

// var myArray = [0, 1, false, 2, undefined, '', 3, null];

// function compact(arr) {
// let result = [];
// arr.forEach(function(elem) {
//     if(elem) {result.push(elem);}
// });
// return result;}
// console.log(compact(myArray));

// Функция которая очищает массив от нежелательных значений


// var numbers = [45, 78, 10, 3];
// numbers.splice(4, 0, 100);
// // var index = number.indexOf(number[6], number[7]);
// console.log(numbers,number[6],number[7]);


// сумма чисел в массиве с помощью for-------------------

// let number = [45, 78, 10, 3];
// let sum2 = 0;
// for (i = 0; i < number.length; i++) {
// sum2 += number[i];
// }
// console.log(sum2);

// сумма чисел в массиве с помощью for-------------------

// сумма чисел в массиве с помощью for/in-------------------

// let number = [45, 78, 10, 3];
// number.splice(4, 0, 100);
// let sum3 = 0;
// for (let i in number) {
// sum3 += number[i];
// }
// console.log(sum3);

// сумма чисел в массиве с помощью for/in-------------------

// сортирует элементы массива по убыванию чисел--------------------------

// let myArr = [45, 78, 10, 3];

// function mySort(arr) {arr.sort((a, b) => b - a);}

// mySort(myArr);
// console.log(myArr);

// сортирует элементы массива по убыванию чисел--------------------------

// Функция которая удаляет дублекаты массива-----------------------------

// var myArr = [1, 2, 3, 2, 1];
// var mySet = new Set(myArr);
// console.log(mySet);

// Функция которая удаляет дублекаты массива-----------------------------















// ------------------------------ОБЬЕКТЫ-------------------------------------

// var cat = {
// 'lengs': 4,
// hisColor: 'gray',
// 'name': 'myCatObject',
// owners: ['Ruslan', 'Alla'], }
// // console.log(cat.hisColor);

// var dog = new Object()
// dog.lengs = 4;
// dog.hisColor = 'black';

// dog.says = cat.says = function(word){
// console.log(word);};

// dog.color = cat.color = function(){
// console.log('My pet has ' + this.hisColor + ' fur');
// };

// console.log(dog.color(),cat.color());

// var user = {
// name: 'userName1',
// id: 0,
// verifiedEmail: false,
// };

// // console.log(Object.keys(user));
// console.log(Object.values(user));

// Проверка есть ли свойство у обьекта---------------------------

// var user = {
//     name: 'userName1',
//     id: 0,
//     verifiedEmail: false,
//     };
//     console.log(Object.hasOwn(user,'phone'));

// Проверка есть ли свойство у обьекта---------------------------

// Задачи по обьектам-----------------------------



// Задачи по обьектам-----------------------------

// -----------1--------------

// var city1 = {}

// city1.name = 'городN';
// city1.population = 100000000;

// // console.log(Object.values(city1));

// // --------------2---- созданте обьэ=екта через нотацию----------

// var city2 = {
// name: 'городM',
// population: 1e6,}; 

// // возврат имени у двух обьектов сразу----------3------------



// city1.getName = city2.getName = function(){
// return this.name};

// // console.log(city1.getName(), city2.getName());


// // Возвращаем информацию через метод ExportStr с обращением к свойсту через метод for/in--------------------------------

// // for (prop in city1) {
// // console.log('city ' + prop + ' is ' + city1[prop])}


// city1.exportStr = city2.exportStr = function(){
// let result = '';
// for (prop in this) {
// if (typeof this[prop] !== 'function'){
// result += prop + '=' + this[prop] + '\n'} 
// }
// return result;
// };
// // console.log(city1.exportStr(),city2.exportStr());

// // ------------------

// function getObject(obj){
// return obj;
// }
// // console.table(getObject(city1));
// // console.table(getObject(city2));

// city1.getCity = city2.getCity = function(){
// return getObject(this);}

// console.log(city1.getCity());
// console.log(city2.getCity());









// ------------------------------ОБЬЕКТЫ-------------------------------------


// Функции----------------










// ------------------------DOM----------------------------------

// console.log(document.getElementById('header'));
// console.log(document.querySelector('header'));

// var logoLink = document.querySelector('.logo');
// console.log(logoLink);

// var aboutPhoto = document.querySelector('.about__photo img');
// console.log(aboutPhoto.src);

// var title = document.querySelector('.offer__title');
// console.log(title.innerText = 'Свой текст в заголовке');  

// var parant = document.querySelector('.offer');
// var btn = document.createElement('button');

// btn.classList.add('button');
// btn.innerText = 'Созданная кнопка';

// parant.appendChild(btn);

// // -------------------------------------События--------------------

// btn.onclick = function() {
// alert('Hello world')
// };

// document.addEventListener('click', function () {if (event.target.classList.contains('button')) {alert('Hello world2');}});



// -------------------Закрепляем шапку профиля----------------------

// var header = document.querySelector('#header');
// var services = document.querySelector('.services');

// document.addEventListener('scroll', function(){
// if(services.getBoundingClientRect().top <= 0){
// header.classList.add('header--fixed');}
// else {header.classList.remove('header--fixed');}
// });


// ---------------------------Модальное окно----------------------


// document.addEventListener('click', function(){
// if(event.target.classList.contains('open--modal')) 
// {document.querySelector('#' + event.target.getAttribute('data-modal')).classList.add('modal--open');}

// if(event.target.classList.contains('modal__close')){
// event.target.closest('.modal--open').classList.remove('modal--open');}});


// document.addEventListener('keydown', function(){
// if(event.keyCode === 27 && document.querySelector('.modal--open')){
// document.querySelector('.modal--open').classList.remove('modal--open');}});


// ---------------------------Модальное окно----------------------


// ---------------------------customSelect-----выпадающий список-------------------------


function customSelect(){
if(document.querySelector('.custom_select'));{
var select = document.querySelector('.custom_select'); 
select.setAttribute('hidden', '');

var options = Array.from (select.querySelectorAll('option'));

var wrap = document.createElement('div');
wrap.classList.add('custom_select__wrap' , 'form__input');
select.parentNode.insertBefore(wrap, select);

var selected = document.createElement('button');
selected.setAttribute('type', 'button');
selected.classList.add('custom_select__selected');
selected.innerText = options[0].innerText;
wrap.appendChild(selected);

var list = document.createElement('div');
list.classList.add('custom_select__list');
wrap.appendChild(list);

options.forEach(function(item){
var listItem = document.createElement('button');
listItem.setAttribute('type', 'button');
listItem.classList.add('custom_select__option');
listItem.innerText = item.innerText;
list.appendChild(listItem);

listItem.onclick = function(){
    list.classList.toggle('custom_select__list--open');
selected.innerText = listItem.innerText;
select.value = item.value};
});

selected.onclick = function(){
list.classList.toggle('custom_select__list--open');};

// options.onclick = function(){
// event.target.classList.add('custom_select__listItem--color')}

options.addEventListener('click', function(){
if(event.target.classList.contains('custom_select__list'))
})

}
}




customSelect();


// ---------------------------customSelect------------------------------



// ----------------слайдер----------------------

function customSlider(sliderClassName) {
let slider = document.querySelector(sliderClassName);
let currentSlide = 0;
let slides = slider.querySelectorAll('.slider__elem');
let sliderList = slider.querySelector('.slider__list');
let list = document.createElement('ul');
list.classList.add('custom_slider__dots');
slider.appendChild(list);

let mousePressed = false;
let swipe = [];
let swipeDirection = '';

for (i=0; i < slides.length; i++) {
let li = document.createElement('li');
let btn = document.createElement('button');

btn.classList.add('custom_slider__dot');
btn.innerText = i +1;
li.appendChild(btn);
list.appendChild(li);
}

let buttons = slider.querySelectorAll('.custom_slider__dot');

buttons.forEach((btn) => {
btn.onclick = function () {
btn.classList.add('custom_slider__dot--current');
currentSlide = btn.innerText - 1;
changeSlide();
};
});

let changeSlide = () => {
slides.forEach((item) => {
item.classList.remove('slider__elem--active');
});
buttons.forEach((btn)=>{
btn.classList.remove('custom_slider__dot--current');
});

currentSlide >= slides.length ? (currentSlide = 0) : null;
currentSlide => -1 ? (currentSlide = -1) : null;

buttons[currentSlide].classList.add('custom_slider__dot--current');
slides[currentSlide].classList.add('slider__elem--active');
};
changeSlide();

function prevSlide () {
    currentSlide++
    changeSlide();
};
function nextSlide () {
    currentSlide++
    changeSlide();
};    

slider
.querySelector('.custom_slider__arrow--prev').addEventListener('click', function() {prevSlide();});
slider
.querySelector('.custom_slider__arrow--next').addEventListener('click', function() {nextSlide();});

sliderList.addEventListener('mousedown', () => {
mousePressed = true
swipe[0] = event.clientX;} );
sliderList.addEventListener('mouseup', () => {
mousePressed = false
swipe[1] = event.clientX;

if (swipe[0] !== swipe[1]) {
swipe[0] > swipe[1] ? nextSlide() : prevSlide();
}
});
}

customSlider('.slider'); 

// ----------------слайдер----------------------

// -------------прототипное наследования---------------

var transport = {
peopleCount: '1',
move: function() {
console.log('I`m moving');
},
};

var car = {
__proto__:transport ,
fuel: 'gas',
};
console.log(car.move());


// -------------прототипное наследования---------------








// ------------------сетинтервал и сеттаймаут--------------------------
function counter (elemClassName) {
    console.log(counter);

let counterTarget = document.querySelectorAll(elemClassName);
let counted = false;

document.addEventListener('scroll', function() {
for (i = 0; i < counterTarget.length; i++) {
// console.log(counterTarget[i]);
}
});

}
counter('.services__number');



















// ------------------сетинтервал и сеттаймаут--------------------------