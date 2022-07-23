import React from "react";

function MoreButton({onMoreButtonClick}) {

  const handleClick = () => onMoreButtonClick()

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
