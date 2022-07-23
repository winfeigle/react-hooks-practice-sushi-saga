import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEatSushi}) {
  const [sushiSlice, setSushiSlice] = useState(4);

  const sushiBelt = sushis.slice(sushiSlice - 4, sushiSlice).map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi}/>
  })

  const onMoreButtonClick = () => {
    setSushiSlice(sushiSlice => sushiSlice + 4)
  }

  return (
    <div className="belt">
      {sushiBelt}
      <MoreButton onMoreButtonClick={onMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
