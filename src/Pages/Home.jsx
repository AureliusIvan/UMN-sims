import react from "react";
import { Line } from "../components/Grid/Line";
import { items } from "../components/Grid/elementList";

function createList(x){
    return(
      <Line
        key = {x.id}
        first={x.first}
        second={x.second}
        third={x.third}
        fourth={x.fourth}
      />
    );
  }

function Home(props) {

    return (
      <div className="Lost">
          {items.map(createList)}
        <button onClick={ () => props.handleClick('home')}></button>
      </div>
    )
  }
  export default Home;