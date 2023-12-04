let fruits = ['orange', 'plum', 'grapefruit', 'lemon', 'peach',
    'pineapple', 'pear', 'lime', 'apple', 'grape'];
console.log(fruits);

let volume = {
    title: 'God always travel incognito',
    pageCount: '300 pages',
    genre: 'Novel'
};
console.log(volume);

let book = {
    title: 'Boom',
    pageCount: 300,
    genre: 'Novel',
    authors: [{
        names: 'Danya',
        age: 18
    },
        {
            names: 'Oleg',
            age: 19,
        }]

}
console.log(book);

let users = [
    {name: 'Vasya', username: 'Albert', password: 1231231},
    {name: 'Daniel', username: 'Vegas', password: 'Hola'},
    {name: 'Winston', username: 'user123', password: 'Smoky123'},
    {name: 'Clementine', username: 'Clementinetop', password: 'Sidneywest'},
    {name: 'Peter', username: 'petertop1213', password: 'Adioschao'},
    {name: 'Gervonta', username: 'Astonvilla', password: 'Burjehalifa'},
    {name: 'Solomia', username: 'Solomia33', password: 'Samizayne'},
    {name: 'Geronimo', username: 'Goodman', password: 'adios2123'},
    {name: 'Harry', username: 'Harrykane', password: 'password123'},
    {name: 'Lolita', username: 'Lolly2501', password: 'idiot1337'}
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].password);
}

let time = prompt('Скільки хвилин?');
if (time >= 0 && time <= 59) {
    if (time <= 15) {
        console.log('Перша чверть');
    }else if (time <= 30) {
        console.log('Друга чверть');
    }else if (time <= 45) {
        console.log('Третя чверть');
    }else if (time <= 59) {
        console.log('Четверта чверть');
    }
}


switch ('1') {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;

}


let products = [
    {
        title: 'milk',
        price: 22
    },
    {
        title: 'burger',
        price: 33
    },
]

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div>
        <h2>${product.title} - ${product.price}$</h2>
    </div>`)
}























