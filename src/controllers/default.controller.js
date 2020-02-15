
const { PORT } = process.env;
const port = PORT || 8000;
const env = (port === 8000 ? `development` : `production`);

const baseUrl = `http://localhost:${port}`;

class DefaultController {
  constructor(data, resources) {
    this.data = data;
    this.res = resources.res;
  }

  defaultEP() {
    this.res.status(200).send({
      message: 'Welcome to ThriveSolutions API service!',
      data: {
        info: 'Available endpoints',
        endpoints: [
          {
            method: 'POST',
            env,
            header: 'none',
            url: `${baseUrl}/api/sendgrid/send-test`,
            payloadType: 'application/json',
            samplePayload: `{}`,
          },
        ],
      },
    })
  }
}

module.exports = DefaultController;
