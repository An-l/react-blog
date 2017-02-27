
export default function request (method, url, body) {
    method = method.toUpperCase();
    url = 'http://localhost:3000/' + url;

    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method
        })
        .then(res => res.json());
}

export const getPost = () => request('GET', 'posts');
