# Responses

## **1. Technical Part**

### 1.1 **SendGrid API Overview**

Welcome to SendGrid’s Web API v3! This API is RESTful, fully featured, and easy to integrate with. You can checkout *SendGrid*'s [official documentation](https://sendgrid.com/docs/api-reference/).

You can also checkout sample implementation [here](https://github.com/RolandBarro/test-sendgrid-app).

#### Getting Started
To use SendGrid over RapidAPI go over these simple steps

- [ ] Install library:

```
$ npm install -s unirest
```

Assuming you have checked out the sample implementation above, please follow installation guide from it's [README.md](https://github.com/RolandBarro/test-sendgrid-app).

After successfully installed and run the app from your local machine, you are now ready to implement other endpoints Sendgrid offered thru RapidAPI.

---

> `MAIL`
>
> *This endpoint allows you to send email over SendGrid’s v3 Web API,*

- **Name:** `Send`
- **Method:** `POST`
- **Sample Payload:**
```
{
	"personalizations": [
		{
			"to": [
				{
					"email": "john@example.com"
				}
			],
			"subject": "Hello, World!"
		}
	],
	"from": {
		"email": "from_address@example.com"
	},
	"content": [
		{
			"type": "text/plain",
			"value": "Hello, World!"
		}
	]
}
```
...






