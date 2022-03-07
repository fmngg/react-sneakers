import Card from '../components/Card/Card';

function Home({cartItems, items, searchValue, clearSearchInput, changeSearchInput, addToCart, addToFavoutire, isLoading}) {
  
  const render = () => {
    return(
      (isLoading ? [...Array(12)] :
      items.filter(item => item.title.toLowerCase().includes(searchValue))).map((product, index) => (
        <Card
          key={index}
          onPlus={addToCart}
          onFavourite={addToFavoutire}
          isAdded ={cartItems.some(obj => obj.id === product.id)}
          isReady={isLoading}
          {...product}
        />
      ))
    )
  }

  return(
      <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Search by: '${searchValue}'` : 'All sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && <img onClick={clearSearchInput} className="toClear" src="/img/btn-remove.svg" alt="Clear" />}
          <input onChange={changeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
      </div>
      <div className="sneakers d-flex flex-wrap">
        {render()}
      </div>
    </div>
  )
}

export default Home;