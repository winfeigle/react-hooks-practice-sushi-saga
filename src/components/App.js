import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(updatedSushis);
      }); },[])

    const handleEatSushi = (eatenSushi) => {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
    });

    setSushis(updatedSushis);
  };

  const eatenSushis = sushis.filter(sushi => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi}/>
      <Table plates={eatenSushis}/>
    </div>
  );
}

export default App;
