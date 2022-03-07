function SuccessNote(props) {
    const randImg = Math.floor(Math.random() * (5-1) + 1)

    return (
        <div style={{display: 'none'}} className="addSuccess">
            <h5>Added successfuly
                <img src={"/img/emojis/" + randImg + ".png"} alt="Emoji" />
                {console.log("/img/emojis/" + randImg + ".png")}
            </h5>
        </div>
    )
}

export default SuccessNote;
