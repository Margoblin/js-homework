let y = 0
const container = document.querySelector('.container')

for (let x = 1; x < 9; x++) {
    const row = document.createElement('div')
    container.appendChild(row)
    row.style.display = 'flex'
    row.style.height = '50px'
    row.style.width = '400px'
    row.style.border = '0.5px solid black'

    for (let y = 1; y < 9; y++) {
        const cell = document.createElement('p')
        cell.style.height = '40px'
        cell.style.width = '50px'
        cell.style.margin = 0
        cell.style.padding = '5px'
        row.appendChild(cell)

        if (((x % 2 === 1) && (y % 2 === 1)) || ((y % 2 === 0) && (x % 2 === 0))) {
            cell.style.backgroundColor = 'black'
            cell.style.color = 'white'
        }

        let letter = 0

        switch (y) {
            case 1:
                letter = 'A'
                break
            case 2:
                letter = 'B'
                break
            case 3:
                letter = 'C'
                break
            case 4:
                letter = 'D'
                break
            case 5:
                letter = 'E'
                break
            case 6:
                letter = 'F'
                break
            case 7:
                letter = 'G'
                break
            case 8:
                letter = 'H'
                break

        }
        cell.innerHTML = x + letter
    }
}

//задание 2
class Product {

    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = parseInt(prompt(name + ' Цена: ' + price + '. Сколько добавить в корзину?'))
    }
}

let obj1 = new Product('Юбка', 700, this.quantity)
let obj2 = new Product('Брюки', 1200, this.quantity)
let obj3 = new Product('Шляпа', 500, this.quantity)
let obj4 = new Product('Рубашка', 1900, this.quantity)

let arr = [obj1, obj2, obj3, obj4]

let result = arr.reduce(function (sum, current) {
    return sum + (current.price * current.quantity)
}, 0)

let totalQuantity = arr.reduce(function (sum, current) {
    return sum + current.quantity
}, 0)

let contain = document.querySelector('.contain')

if (totalQuantity != 0) {
    contain.innerHTML = ('Общая сумма:' + result + '. Товаров в корзине:' + totalQuantity)
} else {
    contain.innerHTML = 'Корзина пуста:С'
}

//задание 3*

let catalog = document.querySelector('.catalog')

arr.forEach((obj) => {
    let item = document.createElement('div')
    item.style.width = '80px'
    catalog.appendChild(item)
    item.innerHTML = obj.name + ' Цена:' + obj.price
})
