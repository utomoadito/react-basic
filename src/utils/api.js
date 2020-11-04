import axios from 'axios'

const http = (function() {
  const get = (endpoint) => {
		return processRequest(
			axios.get(mergeEndpoint(endpoint))
		)
  }
  
  const processRequest = (request) => {
		return new Promise((resolve, reject) => {
			request
				.then(response => {
					resolve(response.data)
				})
				.catch(error => {
					reject(error.response)
				})
		})
	}

	const mergeEndpoint = (endpoint) => {
		return `https://api.themoviedb.org/3/${endpoint}?api_key=3c8eab201067fd1320a64335d62c6c69&language=en-US`
  }
  
  return {
		get
	}

})()

export { http }