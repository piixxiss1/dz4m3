let menu = document.querySelector('.menu')
// let menuItem = document.querySelector('menu-item')
let row = document.querySelector('.row')


const getProducts = (category) => {
fetch(`https://api.escuelajs.co/api/v1/products/${category === 'all' ? '' : 'category/' + category}`)
.then((res) => res.json())
// .then((res) => console.log(res))

.then((res) => 
{
    res.forEach((item)=> {
    row.innerHTML += `

    <div class="card">
    <img class="card__img" src="${item.images}" alt="">
    <h2 class="card__title">${item.title}</h2>
    <p class="card__price">Цена:${item.price}</p>
    
    
 </div>`


    })
  })
}
getProducts('all')

const getCategories = () => {
    fetch('https://api.escuelajs.co/api/v1/categories')
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                menu.innerHTML +=
                `<li class="menu-item">${item}</li>`
            })
        
    let menuItems = document.querySelectorAll('.menu-item')
    // console.log(menuItem);

    Array.from(menuItems).forEach((item) => {
        item.addEventListener('click', () => {
            row.innerHTML = ''
            getProducts(item.textContent)
        })
    })
 })
}
getCategories()

