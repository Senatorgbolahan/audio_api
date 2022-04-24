import React , {useState } from "react";
import AudioList from '../components/AudioList'
import SearchForm from '../components/SearchForm'


export default function Home() {

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [audios, setAudio] = useState([]);


  const URL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${searchTerm}`;

  const getAudio = async () => {
      setLoading(true)
      try {
          const response = await fetch(URL);
          const data = await response.json();
          const {artists} = data;
          if (artists) {
            const newAudio = artists.map((item) => {
                const {idArtist, strArtist,strArtistThumb,strCountry, strGenre} = item;
                  return {
                    id: idArtist,
                    name: strArtist,
                    image: strArtistThumb,
                    country: strCountry,
                    genre:strGenre,
                  }
            });
            setAudio(newAudio);
          } 
          else {
            setAudio([]);
          }

      } catch (error) {
          console.log(error);
      }
      setLoading(false)
  }

  React.useEffect(() => {
    getAudio();
  },[searchTerm, URL])

  return (

    <main>
      <SearchForm setSearchTerm = {setSearchTerm}/>
      <AudioList loading = {loading} audios ={audios}/>
    </main>

  );
}
 