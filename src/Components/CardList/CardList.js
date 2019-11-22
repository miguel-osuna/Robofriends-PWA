import React, { Fragment } from "react";
import Card from "../Card/Card";

// Destructuring of props = { robots }
const CardList = ({ robots }) => {
  // Card Component List
  console.log("Card List");
  return (
    <Fragment>
      <div>
        {robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default CardList;
