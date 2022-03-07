import React from 'react'
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss'

function Card({
    id,
    onPlus,
    title,
    imgUrl,
    price,
    onFavourite,
    isFavourited = false,
    isAdded = false,
    isReady
}) {

    const [isAddedCart, setIsAddedCart] = React.useState(isAdded)
    const [isAddedFavourite, setIsAddedFavourite] = React.useState(isFavourited)

    const plusClickHandle = () => {
        onPlus({ id, title, imgUrl, price })
        setIsAddedCart(!isAddedCart)
    }

    const favoutireClickHandle = () => {
        onFavourite({ id, title, imgUrl, price })
        setIsAddedFavourite(!isAddedFavourite)
    }


    return (
        <div className={styles.card}>
            {isReady ?
                <ContentLoader
                    speed={1}
                    width={210}
                    height={218}
                    viewBox="0 0 210 218"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="8" y="10" rx="10" ry="10" width="150" height="90" />
                    <rect x="8" y="119" rx="10" ry="10" width="150" height="15" />
                    <rect x="8" y="141" rx="10" ry="10" width="60" height="15" />
                    <rect x="118" y="182" rx="10" ry="10" width="32" height="32" />
                    <rect x="8" y="187" rx="10" ry="10" width="80" height="25" />
                </ContentLoader>
                :
                <>
                    <div className={styles.toFavoutire} onClick={favoutireClickHandle}>
                        <img className="buttonCard" src={isAddedFavourite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Like" />
                    </div>
                    <img className="sneaker ml-15" width={133} height={112} src={imgUrl} alt="Sneakers" />
                    <h5>{title}</h5>
                    <div className="bottomCard d-flex justify-between align-center">
                        <div className="price d-flex flex-column">
                            <span>price:</span>
                            <b>{price} BYN</b>
                        </div>
                        <div className={styles.toCart} onClick={plusClickHandle}>
                            <img className="buttonCard" src={isAddedCart ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Card;
