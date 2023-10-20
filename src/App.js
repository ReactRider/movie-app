
import './App.css';
import{useEffect, useState} from 'react';
import Header from './components/header/header';
import axios from 'axios';
import MovieItem from './components/movieItem/movieItem';

function App() {

  const[search,setSearch]=useState('');
  const[movieList, setMovieList]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(false);

 useEffect(()=>{
  if(search===''){
    setLoading(false);
    setMovieList([]);
    return;
  }
  setLoading(true);

    const timeout=setTimeout(async () => {
      try{
      const {data}= await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=9f196060`);
      setMovieList(data.Search);
      
      }catch{
        setError(true);
      }finally{
        setLoading(false);
      }
    },2000);
    return()=>clearTimeout(timeout);

  },[search])


  return (
    <>
      <Header search={search} setSearch={setSearch}/>


    {loading ? 'Ucitavanje' : error ? 'Greska' : movieList && Array.isArray(movieList) && (
      <div className={StyleSheet.movieWrapper}>
        {movieList.map((movie)=> (
          <MovieItem title={movie.Title} poster={movie.Poster} imdbID={movie.imdbID} />
        ) )}
      </div>
    )}


    </>
  );
}

export default App;
