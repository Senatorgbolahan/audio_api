import React from "react";
import { Link  } from "react-router-dom";

export default function Audio({image,id,name,country,genre}) {
  return <article className="cocktail">
      <div className="img-container">
          <img src= {image} alt= {name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{country}</h4>
        <p>{genre}</p>
        <Link className = "btn btn-primary btn-details" to ={`/audio/${id}`}>details</Link>
      </div>
  </article>
}
