import axios from "axios";

export const covidStateUrl = "https://api.covid19api.com/summary";

const config = {
    baseURL: covidStateUrl,
    responseType: "json",
    headers: { "Access-Control-Allow-Origin": "*" },
};

const api = axios.create(config);

export default api;
