const apiUrl = "https://test-project-ea9e5-default-rtdb.europe-west1.firebasedatabase.app/books";
const apiKey = 'AIzaSyDYBn0OV0tmOWR_JECS9gwF5C_IKtbNUxo';
// Access token: 67j2OBO0grj8H6UdznqQ

export class Api {

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

        getFilter = async (urlParams) => {
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
    put = async (model,urlParams) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "PUT",
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
