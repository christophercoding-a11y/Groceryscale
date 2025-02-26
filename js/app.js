/**
 * click on cell
 * get price of each item in cell
 * when a cell is clicked, freeze cell
 * enter weight for item
 * calculate weight * price
 * display results
 */

// 1 .Build dataset
const data = [
    {
        id: 1,
        item: 'romaTomato',
        itemDisplay: 'Roma Tomato',
        pricePerPound: 1.35
    },
    {
        id: 2,
        item: 'greenTomato',
        itemDisplay: 'Green Tomato',
        pricePerPound: 1.67
    },
    {
        id: 3,
        item: 'redTomato',
        itemDisplay: 'Red Tomato',
        pricePerPound: 1.55
    },
    {
        id: 4,
        item: 'bellPepper',
        itemDisplay: 'Bell Pepper',
        pricePerPound: 0.99
    },
    {
        id: 5,
        item: 'redPepper',
        itemDisplay: 'Red Pepper',
        pricePerPound: 0.99
    },
    {
        id: 6,
        item: 'jalapeno',
        itemDisplay: 'Jalapeno',
        pricePerPound: 1.19
    },
    {
        id: 7,
        item: 'sweetPotato',
        itemDisplay: 'Sweet Potato',
        pricePerPound: 1.79
    },
    {
        id: 8,
        item: 'redPotato',
        itemDisplay: 'Red Potato',
        pricePerPound: 0.99
    },
    {
        id: 9,
        item: 'russetPotato',
        itemDisplay: 'Russet Potato',
        pricePerPound: 1.67
    }
]

let pricePerPound = 0

let weight = 0

let price = 0

let item = ''

let results = {}

// 2. Display data on browser

// .map() => return a copied array after performing a task on an original array

// let arr1 = ['JOSH', 'MARY', 'EZEKIEL']

// let arr2 = arr1.map(name => name.toLowerCase())
// console.log(arr2)
const cells = data.map(item => {
    const cell = document.createElement('div')
    cell.classList.add('item')
    cell.setAttribute('data-item', `${item.item}`)
    cell.innerText = `${item.itemDisplay} - ${item.pricePerPound} per lb.`
    return cell
})

cells.forEach(cell => {
    document.getElementById('itemSection').appendChild(cell)
    // 3. click on a cell

    cell.addEventListener('click', ()=> {
        for (let obj of data) {
            if (obj.item == cell.getAttribute('data-item')) {
                item = obj.itemDisplay
                pricePerPound = obj.pricePerPound
                console.log(pricePerPound)
            }
        }
    })
})

const setWeight =()=> {
    const scale = parseFloat(document.getElementById('scale').value )

    weight = scale

    setPrice(weight, pricePerPound)
}

const setPrice =(w, p) => {
    price = w * p
    return price
}

const displayResults = ()=> {
    const itemDisplay = document.getElementById('itemDisplay')
    const weightDisplay = document.getElementById('weightDisplay')
    const priceDisplay = document.getElementById('PriceDisplay')

    results.item = item
    results.price = price
    results.weight = weight

    itemDisplay.innerText = results.item
    weightDisplay.innerText = results.weight
    priceDisplay.innerText = results.price.toFixed(2)
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    setWeight()
    displayResults()
})


