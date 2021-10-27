import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

function BlogCard(props) {
  return (
    <div>
      {props.List.map((card, idx) => {
        console.log(card)
        console.log(idx, " : ", card.url);
        return (
          <Link to={"/blog/" + card.url}>
            <p key={idx}>{card.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default withRouter(BlogCard);