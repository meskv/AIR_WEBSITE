import React from "react";
import Card from "./Card/Card";

export default function CardList(props) {
  return props.cardList.length > 0 ? (
    props.cardList.map((card, i) => {
      return (
        <>
          <Card card={card} index={i} key={i} />
        </>
      );
    })
  ) : (
    <h1>No courses exists</h1>
  );
}
