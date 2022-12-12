import debug from "debug";
import axios from 'axios';

const log: debug.IDebugger = debug('app:in-memory-dao');

class FighterDao {
    constructor() {
        log('Created new instance of FighterDao')
    }

    async getFighters() {
        const response = await axios.get('https://api.sportsdata.io/v3/mma/scores/json/Fighters', {
            headers: {"Ocp-Apim-Subscription-Key": "30d551d885e24b2994f22333ad358ad6"}
        })

        return response.data;
    }

    async getFighter(fighterId: string) {
        const response = await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${fighterId}`, {
            headers: {"Ocp-Apim-Subscription-Key": "30d551d885e24b2994f22333ad358ad6"}
        })
        return response.data;
    }
}

export default new FighterDao();