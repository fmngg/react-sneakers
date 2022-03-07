import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home'
//import SuccessNote from './components/SuccessNote';
import { Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourite';


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favouriteItems, setFavouriteItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      const cartItemsRes = await axios.get('https://61e98fb27bc0550017bc6388.mockapi.io/cart')
      const FavouriteRes = await axios.get('https://61e98fb27bc0550017bc6388.mockapi.io/favourite')
      const itemsRes = await axios.get('https://61e98fb27bc0550017bc6388.mockapi.io/items')

      setIsLoading(false)


      setCartItems(cartItemsRes.data)
      setFavouriteItems(FavouriteRes.data)
      setItems(itemsRes.data)
    }

    fetchData()
  }, [])

  const addToCart = (obj) => {

    try {
      if (cartItems.find(cartObj => cartObj.id === obj.id)) {
        axios.delete(`https://61e98fb27bc0550017bc6388.mockapi.io/cart/${obj.id}`, obj)
        setCartItems(prev => prev.filter(cartObj => cartObj.id !== obj.id))
      }
      else {
        axios.post('https://61e98fb27bc0550017bc6388.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }
    }
    catch (e) {
      alert("Couldn't add to cart")
    }
  }

  const addToFavoutire = async (obj) => {
    try {
      if (favouriteItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://61e98fb27bc0550017bc6388.mockapi.io/favourite/${obj.id}`)
      }
      else {
        const { data } =  await axios.post('https://61e98fb27bc0550017bc6388.mockapi.io/favourite', obj)
        setFavouriteItems((prev) => [...prev, data])
      }
    }
    catch (e) {
      alert("Couldn't add to favorites")
    }
  }

  const deleteFromCart = (id) => {
    axios.delete(`https://61e98fb27bc0550017bc6388.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const changeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const clearSearchInput = () => {
    setSearchValue('')
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={deleteFromCart}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/favourite" element={
          <Favourite
            items={favouriteItems}
            addToCart={addToCart}
            addToFavoutire={addToFavoutire}
          />}
        />
      </Routes>
      <Routes>
        <Route exact path="/" element={
          <Home 
            cartItems={cartItems}
            items={items} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            clearSearchInput={clearSearchInput}
            changeSearchInput={changeSearchInput}
            addToCart={addToCart}
            addToFavoutire={addToFavoutire}
            isLoading={isLoading}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
