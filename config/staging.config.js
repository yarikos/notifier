var config = {
	connection: process.env.MONGO_CONNECTION,
	accessToken: '1234',

	logentries: {
		token: '8adf2203-f6bf-4a23-9f3e-2ac9002080f7'
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