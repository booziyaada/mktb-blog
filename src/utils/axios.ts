import axios from 'axios'

axios.defaults.baseURL = process.env.API_BASEURL // or your base URL
// axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN';
// Add other defaults as needed

// Log all requests
axios.interceptors.request.use((config) => {
	console.log(
		`[Axios][Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
	)
	return config
})

// Log all responses
axios.interceptors.response.use(
	(response) => {
		console.log(`[Axios][Response] ${response.status} ${response.config.url}`)
		return response
	},
	(error) => {
		if (error.response) {
			console.log(
				`[Axios][Error] ${error.response.status} ${error.response.config.url}`,
			)
		} else {
			console.log(`[Axios][Error]`, error.message)
		}
		return Promise.reject(error)
	},
)

export default axios
