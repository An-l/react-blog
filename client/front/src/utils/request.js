
export default function request (method, url, body) {
    method = method.toUpperCase();
    url = 'http://118.89.24.64:3000/api/' + url;
 
    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method
        })
        .then(res => res.json())
        .catch(err => alert('无法连接服务器.'));
}

export const getPostList = (limit) => {
    let url = limit ? `post?limit=${limit}&sort=1` : 'post?sort=1';
    return request('GET', url)
};
export const getCategoriesList = (limit) => {
    let url = 'category'; //按时间倒序，新->旧
    url += limit ? `?limit=${limit}` : '';
    return request('GET', url)
};

export const getPostById = (id) => request('GET', 'post/' + id);
export const getPostByTag = (tag) => {
    let url = `post?conditions={"tags":"${tag}"}`;
    return request('GET', url);
};
export const getPostByCategory = (category) => {
    let url = `post?conditions={"category":"${category}"}`;
    return request('GET', url);
};
export const getPostByTitle = (title) => {
    let url = `post?like={"title":"${title}"}`;
    return request('GET', url);
};

export const getTag = () => request('GET', 'tag');
export const getTagNum = (tag) => {
    let url = `post?conditions={"tags":"${tag}"}&count=1`;
    return request('GET', url);
};

export const countPost = () => {
    let url = 'post?count=1';
    return request('GET', url);
}
export const getPostByPage = ( pageNum=0, currentPage=1, limit=2 ) => {
    let start, // 从第几篇文章开始
        url; 

        start = limit * (currentPage - 1);
        
        if (currentPage <= pageNum) {
            url = `post?limit=${limit}&skip=${start}&sort=1`;
            return request('GET', url);
        }
}

export const getOption = () => {
    let url = 'option';
    return request('GET', url)
};