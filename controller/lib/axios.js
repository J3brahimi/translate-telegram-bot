const axios = require("axios");

const TOKEN = "7139953357:AAHNJymUroIZsSPrqg5vauZd7-4MUiFrFSI";
const BASE_URL = `https://api.telegram.org/bot${TOKEN}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = {
  axiosInstance,
};
