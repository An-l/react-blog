
export default function request (method, url, body) {
    method = method.toUpperCase();
    url = 'http://localhost:3000/api/' + url;

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

export const getPostList = () => request('GET', 'post');
export const getPostById = (id) => request('GET', 'post/' + id);
export const getPostByTag = (tag) => {
    let url = `post?conditions={"tags":"${tag}"}`;
    return request('GET', url);
};
export const getTag = () => request('GET', 'tag');
