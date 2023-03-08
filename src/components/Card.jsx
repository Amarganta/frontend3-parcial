import React from "react";

const Card = (props) => {
  return (
    <div>
      <h3>Hi, {props.name}</h3>
      <p>We are glad you think {props.book} is an awesome book</p>
    </div>
  );
};

export default Card;
