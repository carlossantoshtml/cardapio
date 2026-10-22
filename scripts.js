const list = document.querySelector("ul");
const buttonShowall = document.querySelector(".show-all");
const buttonmapall = document.querySelector(".map-all");
const sumall = document.querySelector(".sum-all");
const filterButton = document.querySelector(".filter-all");

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style:'currency',
        currency: 'BRL',
    })

    return newValue
}

function showAll(productarray) {


let myLi = ''

   productarray.forEach(product => {
        myLi += `


    <li><img src=${product.src}>
       <p>${product.name}</p>
        <p class="item-price">R$ ${(formatCurrency) (product.price)}</p>
    </li>
  

    `

    })


    list.innerHTML = myLi
}

function mapallitems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,

        price: product.price * 0.9,
    }))

    showAll(newPrices)



}
function sumallitems(){
    const totalValue = menuOptions.reduce( (acc, curr)=> acc + curr.price,0)
list.innerHTML = 
` <li>
        <p>O valor total dos intes ${ (formatCurrency )(totalValue)}</p>
    </li>`
  



    console.log(totalValue)
}


function filterall(){
    const veganproduct = menuOptions.filter(product=> product.vegan);

 
    showAll(veganproduct)
  
    
 
    console.log(veganproduct);
}





buttonShowall.addEventListener('click',  ()=> showAll (menuOptions))
buttonmapall.addEventListener('click', mapallitems)
sumall.addEventListener('click',sumallitems)
filterButton.addEventListener('click', filterall)

     





