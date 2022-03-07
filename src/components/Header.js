import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
                <Link to="/">
                    <img width={40} height={40} src="/img/logo.png" alt="" />
                </Link>
                <div className="info">
                    <h3 className="text-uppercase">
                        react sneakers
                    </h3>
                    <p className="opacity-5">
                        Original products
                    </p>
                </div>
            </div>
            <ul className="headerRight d-flex">
                <li onClick={props.onClickCart}>
                    <img className="pressImg" width={20} height={20} src="/img/cart.svg" alt="Cart"/>
                </li>
                <li>
                    <Link to="/favourite">
                        <img className="pressImg" width={20} height={20} src="/img/heart.svg" alt="Favourites"/>
                    </Link>
                </li>
                <li>
                    <img className="pressImg" width={20} height={20} src="/img/user.svg" alt="User"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;