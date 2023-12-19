import { ApiConfig, DefaultRequestOptions } from './config';

const makeUrl = resourcePath => `${ApiConfig['api_uri']}/${resourcePath}`;

export function useFetch() {
    function get(url) {
        return fetch(makeUrl(url), {
            ...DefaultRequestOptions,
            method: 'GET'
        }).then(handleResponse);
    }

    function post(url, body) {
        return fetch(makeUrl(url), {
            ...DefaultRequestOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(handleResponse);
    }

    function patch(url, body) {
        return fetch(makeUrl(url), {
            ...DefaultRequestOptions,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(handleResponse);
    }

    return {
        get,
        post,
        patch
    };
}

// helpers

function handleResponse(response) {
    return response.text().then(text => {
        let data;

        try {
            data = text && JSON.parse(text);
        } catch (ex) {
            // wasn't JSON, a simple string was returned
            data = text;
        }

        if (!response.ok) {
            console.error(
                `An error ocurred during the request and returned status ${response.statusText}, ${data}`
            );

            return Promise.reject('An error occurred, please try again');
        }

        return data;
    });
}
