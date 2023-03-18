// Imports
const axios = require('axios');

// Configurations
let config = {
    "apiURL": "https://oocradio.com/api/1.1/wf",
    "docsURL": "https://developer.oocradio.com/docs/intro"
};

// Functions
async function getCurrentSong() {
    let request = await axios({
        method: 'get',
        url: `${config.apiURL}/get_song`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return request.data.response;
};

async function nextLive() {
    let request = await axios({
        method: 'get',
        url: `${config.apiURL}/next_live`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return request.data.response;
};

async function getLiveData() {
    let request = await axios({
        method: 'get',
        url: `${config.apiURL}/get_live_data`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return request.data.response;
};

// Exports
module.exports = {
    getCurrentSong: getCurrentSong,
    nextLive: nextLive,
    getLiveData: getLiveData
};