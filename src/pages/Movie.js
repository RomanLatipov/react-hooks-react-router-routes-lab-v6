import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/movies/"+params.id)
    .then (res => res.json())
    .then (data => {
      setMovie(data);
      const temp = data.genres.map(genre => <p>{genre}</p>);
      setGenres(temp);
    })
  }, [params.id]);

  return (
    <>
      <header>
        <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <span>
          {genres}
        </span>
      </main>
    </>
  );
};

export default Movie;
