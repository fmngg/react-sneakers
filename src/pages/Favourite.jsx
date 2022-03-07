import Card from '../components/Card/Card';


function Favourite({items, addToCart, addToFavoutire}) {
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>My favourites</h1>
        </div>
        {items.length > 0 ? 
        <div className="sneakers d-flex flex-wrap">
        {items.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imgUrl={product.imgUrl}
              onPlus={addToCart}
              onFavourite={addToFavoutire}
              isFavourited={true}
            />
          ))}
        </div>
        : 
        <div className="nofavs">
          <img src={"/img/emojis/1.png"} alt="Emoji" />
          <h1>no favourites</h1>
          <p>add at least 1 product to see something</p>
        </div>
        }
      </div>
    )
}

export default Favourite;