const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/b87da8e81071b07f9e91d742383056bd/${latitude},${longitude}?units=si&lang=ru`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const currently = body.currently;
      const daily = body.daily;
      callback(
        undefined,
        `${daily.data[0].summary} sСейчас ${currently.temperature} градусов. Возможность дождя ${currently.precipProbability}% `
      );
    }
  });
};

module.exports = forecast;
