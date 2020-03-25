import React, { useEffect, useState } from 'react'
// import HelloWorld from './components/HelloWorld'
// import Movie from './components/Movie'
// import Movies from './components/Movies'

const Movie = (props) => {
  const posterURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`
  return (
    <li>
      <h2>{props.title}</h2>
      <img src={posterURL} />
      <p>{props.overview}</p>
    </li>
  )
}

const App = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=1dec07b813675b0a973263be687652ca'
    )
      .then((response) => response.json())
      .then((apiData) => {
        const newMovies = apiData.results
        setMovies(newMovies)
      })
  }, [])

  return (
    <main>
      <header>
        <h1>These my flicks</h1>
      </header>
      <ul class="movies">
        {movies.map((movie) => {
          return (
            <Movie
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
            />
          )
        })}
        <Movie
          title="Batman"
          poster_path="/f5eFxKYAd7hN1BxYzBg9qL1SDRe.jpg"
          overview="The scientist father of a teenage girl and boy accidentally shrinks his and two other neighborhood teens to the size of insects. Now the teens must fight diminutive dangers as the father searches for them."
        />
        <Movie
          title="Ghostbusters II"
          poster_path="/tDlsTDtC15kJd4vrkQkxqoW4Pse.jpg"
          overview="Five years after they defeated Gozer, the Ghostbusters are out of business. When Dana begins to have ghost problems again, the boys come out of retirement to aid her and hopefully save New York City from a new paranormal threat."
        />
        {/* <Movie
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
        /> */}
        <Movie />

        {/* <li>
          <h2>Indian Jones and the Last Crusade</h2>
          <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"></img>
          <p>
            "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the
            Holy Grail, eminent archaeologist Indiana must team up with Marcus
            Brody, Sallah and Elsa Schneider to follow in his father's footsteps
            and stop the Nazis from recovering the power of eternal life."
          </p>
        </li> */}
        {/* <li>
          <h2>Batman</h2>
          <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg"></img>
          <p>
            "The Dark Knight of Gotham City begins his war on crime with his
            first major enemy being the clownishly homicidal Joker, who has
            seized control of Gotham's underworld."
          </p>
        </li>
        <li>
          <h2>Honey, I Shrunk the Kids"</h2>
          <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/f5eFxKYAd7hN1BxYzBg9qL1SDRe.jpg"></img>
          <p>
            "The scientist father of a teenage girl and boy accidentally shrinks
            his and two other neighborhood teens to the size of insects. Now the
            teens must fight diminutive dangers as the father searches for
            them."
          </p>
        </li> */}
      </ul>
    </main>
  )
}

// const App = () => {
//   return <main></main>
// }

export default App
