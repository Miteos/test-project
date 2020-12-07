import {makeAutoObservable} from "mobx";

const apiUrl = "https://the-one-api.dev/v2/";

// Access token: 67j2OBO0grj8H6UdznqQ

export class Api {
    constructor(rootStore) {
        makeAutoObservable(this)
    }

    get = async (urlParams) => {
        const apiKey = 'Bearer 67j2OBO0grj8H6UdznqQ'
        const options = {
            method: "GET",
            headers : {
                'Authorization':apiKey,
            },
        };
        const request = new Request(apiUrl+"character"+"?"+ urlParams, options);
        const response = await fetch(request);
        return  response.json()
    }
}
