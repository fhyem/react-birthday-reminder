import React from "react";

const List = ({ people }) => {
  return people.map((person) => {
    const { id, name, image, age } = person;
    return (
      <React.Fragment>
        <article key={id} className="person">
          <img src={image} />
          <h3>{name}</h3>
          <p>{age} Years old.</p>
        </article>
      </React.Fragment>
    );
  });
};

export default List;
