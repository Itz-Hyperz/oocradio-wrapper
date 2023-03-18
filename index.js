const { create } = require('axios');

class OOCRaido {
    constructor({ version }, {
        baseURL = `https://oocradio.com/api/${version}/wf` // Base URL For OOC Radio Api
    } = {}) {
        this.client = create({
            baseURL, headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }
    async getCurrentSong() {
        try {
            const { data } = await this.client.get(`/get_song`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    async nextLive() {
        try {
            const { data } = await this.client.get(`/next_live`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    async getLiveData() {
        try {
            const { data } = await this.client.get(`/get_live_data`)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = OOCRaido;
