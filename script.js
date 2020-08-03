//Variables, Arrays, and Objects, dotNotation, bracketNotation
//Dom manipulation


let items = [
    {
      name: 'Ironhack T',
      price: 10,
      image: 'https://miro.medium.com/max/5190/1*aVsUjp1zvlRb1799gDjbLA@2x.jpeg'
    },
    {
      name: 'Ironhack Hoodie',
      price: 15,
      image: 'https://m.media-amazon.com/images/I/B1i3u9-Q-KS._AC_CLa%7C2140%2C2000%7CB1wqstnnTfS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png'
    },
    {
      name: 'Ironhack Sticker',
      price: 2,
      image:'https://e7.pngegg.com/pngimages/887/803/png-clipart-ironhack-web-development-job-startup-company-design-blue-user-interface-design-thumbnail.png'
    },
    {
      name: 'Ironhack Mug',
      price: 8,
      image: 'https://d0bb7f9bf11b5ad1a6b2-6175f06f5e3f64e15abbf67415a276ec.ssl.cf1.rackcdn.com/product-images/designlab/11-oz-traditional-ceramic-coffee-mugs-7102-white1582888132.jpg'
    },
  ]


let cart = []


let list = document.querySelector('#items')

items.forEach((item,i)=>{
    list.innerHTML += `<li>
        <div>Name: ${item.name}</div>
        <div>price: $${item.price}</div>
        <image src="${item.image}" />
        <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")'/>
        <button>Buy Item</button>
    </li>`
})


function showCart() {
    let cartItems = document.querySelector('#cart')
    let grandTotal = 0; 
    cartItems.innerHTML = ''
    cart.forEach((item,i)=>{
        grandTotal+= item.price * item.quantity
        cartItems.innerHTML += `<li>
            <div>Name: ${item.name}</div>
            <div>Quantity: ${item.quantity}</div>
            <image src="${item.image}" />
        </li>`
    })

    document.querySelector('#grandTotal').innerHTML = '$' +grandTotal
 
}



function inputChange(i, name, price,image) {
    console.log('I want to buy the ',i,' item named, ',name, ' that costs $',price)
    let listItem = document.querySelectorAll('li')[i]
    let input = listItem.querySelector('input')
    let button = listItem.querySelector('button')

    button.onclick = function(){
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        })
        console.log(cart)
        showCart()
    }

}

//document.querySelector('#two').style.backgroundColor = 'blue'