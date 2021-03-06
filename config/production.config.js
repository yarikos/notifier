var config = {
	connection: process.env.MONGO_CONNECTION,
	accessToken: process.env.ACCESS_TOKEN,

	logentries: {
		token: '0bb5837f-db56-45dd-8be1-6541b14a49f0'
	},

	transport: {
		mandrill: {
			token: process.env.MANDRILL_TOKEN
		},
		twilio : {
			accountSid: process.env.TWILIO_ACCOUNT_SID,
			authToken: process.env.TWILIO_ACCOUNT_TOKEN
		},
		gcm : {
			serverApiKey: process.env.GOOGLE_SERVER_API_KEY
		},
		apn : {
			cert: process.env.APPLE_CERT,
			key: process.env.APPLE_KEY
		}
	},

	jobs: {
		run: {
			resolve: 5,
			execute: 10
		},

		collection: 'notifierJobs'
	}
};

module.exports = config;