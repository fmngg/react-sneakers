function Drawer({ onRemove, onClose, items = [] }) {
    return (
        <div className="drawerShadow">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Cart
                    <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
                </h2>
                {items.length > 0 ?
                    (
                        <div className="d-flex flex-column flex">
                            <div className="cartItems">
                                {
                                    items.map((obj) => (
                                        <div key={obj.id} className="cartItem d-flex aligh-center mb-20">
                                            <img className="mr-20 ml-15 mb-15" width={70} height={70} src={obj.imgUrl} alt="Sneakers" />
                                            <div className="mr-20">
                                                <p className="mb-10">
                                                    {obj.title}
                                                </p>
                                                <b>
                                                    {obj.price} BYN
                                                </b>
                                            </div>
                                            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="totalBlock mt-30">
                                <ul>
                                    <li className="d-flex">
                                        <span>Total:</span>
                                        <div></div>
                                        <b>299 BYN</b>
                                    </li>
                                    <li className="d-flex">
                                        <span>5% Tax:</span>
                                        <div></div>
                                        <b>14.95 BYN</b>
                                    </li>
                                </ul>
                                <button className="greenButton">Place an order <img src="/img/arrow.svg" alt="Arrow" /> </button>
                            </div>
                        </div>
                    ) : (
                        <div className="cartEmpty">
                            <img className="empty" src="/img/empty-cart.jpg" alt="Empty" />
                            <h2>Cart is empty</h2>
                            <p>add an item to place an order</p>
                            <button onClick={onClose} className="greenButton">
                                <img src="/img/arrow.svg" alt="Arrow" />Go back
                            </button>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Drawer;