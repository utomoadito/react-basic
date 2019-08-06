import React from 'react'
// import Main from './views/Main'
import Header from './components/Header'
import { routes } from './router'
import { Route } from 'react-router-dom'
import logo from './logo.svg'

function App() {
  const profile = {
    id: 10,
    name: 'Bambang'
  }
  const desc = {
    job: 'Kuli'
  }

  return (
    <div id="root">
      <Header />
      <div className="container">
        {/* Ambil route dari route.js kemudian melakukan perulangan */}
        {routes.map((route, i) => {
          // <Route {...route} /> // langsung menampilkan route tanpa props
          if (route.path === '/') {
            return (
              <Route
                key={i}
                exact
                path={route.path}
                render={props => (
                  <route.component {...props} profile={profile} desc={desc} />
                )}
              />
            )
          } else {
            return (
              <Route
                key={i}
                path={route.path}
                render={props => (
                  <route.component {...props} profile={profile} desc={desc} />
                )}
              />
            )
          }
        })}
        {/* <Main profile={profile} desc={desc} /> //ini yang sebelumnya tanpa route */}
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {profile.name}, Edit <code>src/App.js</code> and save to reload. {desc.job}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_personalnk"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  )
}

export default App
