function Cards(card){
    return(
        <li className="cards">
            <img src={card.image} alt ={card.title}/>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <p>{card.price}</p>
            <button>Add to Card</button>
        </li>
    )
}


export default Cards;