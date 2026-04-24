const axios = require("axios");

async function fetch(url) {
    const { data } = await axios.get(url, {
        timeout: 15000,
        headers: {
            "User-Agent": "Mozilla/5.0"
        }
    });

    return data;
}

module.exports = { fetch };