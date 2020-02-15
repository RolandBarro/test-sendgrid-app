const unirest = require("unirest");

const req = unirest("POST", "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send");
req.headers({
	"x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
	"x-rapidapi-key": "075ce94760mshcf1baf6d78937d0p114ac4jsn83486f75f98e",
	"content-type": "application/json",
	"accept": "application/json"
});
req.type("json");

class SendGrid {
  constructor(data, resources) {
    this.data = data;
    this.res = resources.res;
  }

  sendMessage() {
    const { body } = this.data;

    if (!body) {
      return this.res.status(500).send({ message: 'Invalid request!', data: 0 });
		}

		if (!body.personalizations) {
			req.send({
				personalizations: [
					{
						to: [ { email: 'john@example.com' } ],
						subject: 'Hello, World!'
					}
				],
				from: {
					email: 'rbarro@yopmail.com'
				},
				content: [
					{
						type: 'text/plain',
						value: 'Hello, World!'
					}
				]
			});
		
			return req.end((res) => {

				if (res.error) {
					const { error } = res;

					return this.res
						.status(500)
						.send({
							message: error.message, 
							...error
						});
				}

				return this.res
					.status(200)
					.send({ message: 'Message sent successfully.', data: res });
			});
		}
  }
}

module.exports = SendGrid;
