
module.exports = {

	http: {
		// 
		// Address and port for the HTTP server
		// 
		address: '0.0.0.0',
		port: 8080,

		// 
		// Enable the expressjs trust proxy option?
		// 
		trustProxy: false,

		// 
		// Allow cross-origin requests using CORS?
		// 
		enableCors: false
	},

	mongoose: {
		// 
		// MongoDB URL for main mongoose database
		// 
		url: 'mongodb://localhost/cmsdb'
	}

}
