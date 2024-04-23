let cart = []
    let total = 0

    function addToCart(itemName) {
      let price
      switch (itemName) {
        case 'NORTH PLUS White Mens Running Shoes':
          price = 1079
          break
        case 'CRUISER Navy Mens Running Shoes':
          price = 1594
          break
        case 'BONUS Navy Mens Sports Shoes':
          price = 1424
          break
        case 'BRACE Black Mens Sports Shoes':
          price = 1323
          break

        case 'CAMP WAY Grey Mens Walking Shoes':
		  price = 1699
          break
        case 'CAMP-SPUNKY Black Mens Running Shoes':
          price = 2799
          break
        case 'CYBER Navy Mens Walking Shoes':
          price = 1579
          break
        case 'PEDRO Grey Mens Running Shoes':
          price = 2500
          break
		  
        default:
          price = 0
      }
      cart.push({name: itemName, price})
      total += price
      updateCart();

    }

    function updateCart() {
      let cartItem = document.getElementById('cart-items')
      cartItem.innerHTML = ''
      cart.forEach(item => {
        let li = document.createElement('li')
        li.textContent = `${item.name} - ${item.price}`
        cartItem.appendChild(li)
      });
      document.getElementById('total').textContent = total
    }
