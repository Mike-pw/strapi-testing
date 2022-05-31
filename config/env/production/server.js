module.exports = ({ env }) => ({
    url: env("MY_HEROKU_URL"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["jP8pb1lYsAhnmURarewxhA==", "34xnLMYHY5jiU7ONTstTqQ=="]),
    },
  });