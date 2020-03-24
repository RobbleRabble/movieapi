import React, { Component } from 'react'
import axios from 'axios'

export class Movie extends Component {
  state = {
    movieItems: [],
  }

  async componentDidMount() {
    // once app is loaded, do thing
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=1dec07b813675b0a973263be687652ca'
    )
    this.setState({
      allMovies: resp.data,
    })
    // .then((response) => {
    //   console.log(response)
    //   return response.json()
    // })
    // .then((data) => {
    //   console.log(data)
    //   this.setState({
    //     movieItems: data,
    //   })
    // })
  }

  // using axios
  // searchForMovie = async () => {
  //   const url =
  //     'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=1dec07b813675b0a973263be687652ca'
  //   console.log(this.state.searchTerm, url)
  //   const resp = await axios.get(url)
  //   console.log(resp)
  //   const title = resp.data.ul
  //   const description = resp.data.ul
  //   const foreignKey = resp.data.up
  //   }

  render() {
    const allMovies = [...this.state.allMovies]
    return (
      <>
        <h1>My flicks</h1>
        <ul>
          {this.state.allMovies.map((item) => {
            return (
              <li>
                <h2>{item.title}</h2>
                {/* <p>plot:{item.overview}</p>
                <p></p>
                <p>popularity: {item.popularity}</p> */}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Movie
