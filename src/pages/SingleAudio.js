import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleAudio() {
  const {id} = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState(null);

  const URL = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`;

  useEffect(() => {
    setLoading(true);

    async function getAudio(){
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            const {artists} = data;
            if (artists) {
              const  {
                strArtist:name, 
                strArtistThumb:image, strCountry:country,
                 strGenre: genre,strFacebook: facebook, strBiographyEN,strStyle, } = data.artists[0];
              const info = [strBiographyEN, strStyle]

              const newAudio = {name, image, facebook,country,genre,info};
              setAudio(newAudio)
              
            } else {
              setAudio(null)
            }

        } catch (error) {
          console.log(error);
        }
        setLoading(false);
    }

    getAudio();
  }, [id]);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  }

  if (!audio) {
    return <h1 className="section-title">no audio details to display</h1>
  }
  else{
    const {name, image, country,facebook, genre,info} = audio;
    return <section className="section cocktail-section">
      <Link to="/" className = "btn btn-primary">back home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src= {image} alt= {name}/>
        <div className="drink-info">
          <p>name: {name}</p>
          <p>country: {country}</p>
          <p>genre: {genre}</p>
          <p>facebook: {facebook}</p>
          <p>info: {
            info.map((item,index) => {
                return item ? <span key={index}>{item}</span> : null
            })
            }</p>
        </div>
      </div>
    </section>
  }

  // return <h1>single audio page: {id}</h1>;
}
