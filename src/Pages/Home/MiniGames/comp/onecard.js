import './onecard.css';

export default function Onecard({ card, handleChoice, flipped, disabled }){

    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }

    return(
        <div className="card">
            <div className={flipped ? "flipped" : ""}> 
                <img 
                className="depan" 
                src={card.src} 
                alt="card depan"
                />

                <img 
                className="belakang"
                src="/img/card.png" 
                onClick={handleClick} 
                alt="card belakang"
                />
            </div>
       </div>
    )
}