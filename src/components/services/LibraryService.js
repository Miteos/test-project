const apiUrl = "https://test-project-ea9e5-default-rtdb.europe-west1.firebasedatabase.app/libraries";
const apiKey = process.env.REACT_APP_LIBRARY_API_KEY;

export class LibraryService {

    get = async () => {
        let options = {
            method: "GET",
            headers: {
                'Authorization': apiKey,
                'Access-Control-Allow-Origin': '*'
            },
        };

        const request = new Request(apiUrl + '.json', options);
        const response = await fetch(request);
        return await response.json();
    };

    find = async (urlParams) => {
        let options = {
            method: "GET",
            headers : {
                'Authorization':apiKey,
                'Access-Control-Allow-Origin': '*'
            },
        };

        const request = new Request(apiUrl + '.json' + urlParams , options);
        const response = await fetch(request);
        return await response.json()

    };
    post = async (model) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            'Access-Control-Allow-Origin': '*',
            headers,
            body: JSON.stringify(model)
        };
        const request = new Request(apiUrl + '.json', options);
        const response = await fetch(request);
        return response;
    };
    postBook= async (model, urlParams ) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            headers,
            body: JSON.stringify(model)
        };
        const request = new Request(apiUrl+'/'+ urlParams +'/books'+ '.json', options);
        const response = await fetch(request);
        return response;
    };
    patch = async (model, urlParams ) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(model)
        };
        const request = new Request(apiUrl+'/'+ urlParams + '.json', options);
        const response = await fetch(request);
        return response;
    };
    delete = async (id) => {
        const options = {
            method: "DELETE",
            headers : {
                "Content-Type": "application/json",
                'Authorization':apiKey,
                'Access-Control-Allow-Origin': '*'
            },
        };
        const request = new Request(apiUrl + "/" + id +'.json', options);
        const response = await fetch(request);
        return await response.json()
    }

}
