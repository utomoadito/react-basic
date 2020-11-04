import React, { useState, useEffect } from 'react'
import { http } from '../utils/api'
import '../App.css'

function Third(props) {
  const [topRated, setTopRated] = useState({})

  useEffect(() => {
    http.get('movie/top_rated').then(res => {
      setTopRated(res)
    })
  }, [])

  /*
  On the first render the request has not yet started, and therefore there is no data yet.
  It need to have a loading boolean or just check if the data is already loaded before trying to access it.
  Ex: const topRatedTitle = topRated.results? topRated.results[0].title : null 
  */
  const topRatedData = topRated.results?.map((movie, index) => {
    return (
      <div key={index} className="col-sm-6 col-md-3" style={{marginBottom: '20px'}}>
        <div className="thumbnail" style={{height: '100%', position: 'relative'}}>
          <img src={'https://image.tmdb.org/t/p/w300/'+movie.poster_path} alt="..." />
          <div className="caption">
            <h3 style={{marginBottom: '30px'}}>{movie.title}</h3>
            <p style={{position: 'absolute', bottom: '0'}}>
              <button className="btn btn-primary">Button</button>
              <button className="btn btn-default">Button</button>
            </p>
          </div>
        </div>
      </div>
    )
  })

  

  return (
    <div className="row">
      <div className="col-md-12">
        <h1 className="text-center">Movie Lists</h1>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Top Rated Movie</h3>
          </div>
          <div className="panel-body">
            <div className="row display-flex">
              {topRatedData}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third
