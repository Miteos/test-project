const apiUrl = "https://test-project-ea9e5-default-rtdb.europe-west1.firebasedatabase.app/";
const apiKey = process.env.REACT_APP_LIBRARY_API_KEY;

export class BookService {

    get = async (additionalUrl) => {
        let options = {
            method: "GET",
            headers: {
                'Authorization': apiKey,
                'Access-Control-Allow-Origin': '*'
            },
        };

        const request = new Request(apiUrl + additionalUrl+'.json', options);
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

            const request = new Request(`${apiUrl}/books.json${urlParams}` , options);
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
        const request = new Request(`${apiUrl}/books.json`, options);
        return await fetch(request);
    };
    patch = async (model, urlParams) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(model)
        };
        const request = new Request(`${apiUrl}/books/${urlParams}.json`, options);
        return await fetch(request);
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
        const request = new Request(`${apiUrl}/books/${id}.json`, options);
        const response = await fetch(request);
        return await response.json()
    }

}
