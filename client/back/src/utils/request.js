import { browserHistory } from 'react-router';

export default function request (method, url, body) {
    method = method.toUpperCase();
    url = 'http://118.89.24.64:3000/api/' + url;

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('blog-token') || ''
    };

    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }
    

    return fetch(url, {
        method,
        headers,
        body
        })
        .then(res => {
            return res.json()
        }, err => console.warn('连接不上服务器：' + err))
        .then(res => {
           
            if (res.status === 'fail') {
                alert(res.description)
                browserHistory.push('admin');
                return false;
            }
            return res;
        });
}

export const getPostList = () => {
    let url = 'post'; //按时间倒序，新->旧
    return request('GET', url)
};
export const getPostById = (id) => request('GET', 'post/' + id);
export const getPostByTag = (tag) => {
    let url = `post?conditions={"tags":"${tag}"}`;
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
export const countPostByCatogory = (category) => {
    let url = `post?conditions={"category":"${category}"}&count=1`;
    return request('GET', url);
}
export const getPostByPage = ( pageNum=0, currentPage=1, limit=2 ) => {
    let start, // 从第几篇文章开始
        url; 

        start = limit * (currentPage - 1);
        
        if (currentPage <= pageNum) {
            url = `post?limit=${limit}&&skip=${start}`;
            return request('GET', url);
        }
}

export const getCategory = () => {
    let url = 'category';
    return request('GET', url)
};

export const createPost = (body) => {
    let url = 'post';
    return request('POST', url, body)
};
export const createCategory = (body) => {
    let url = 'category';
    return request('POST', url, body)
};
export const updatePostById = (id, body) => {
    let url = `post/${id}`;
    return request('PATCH', url, body)
};
export const updateCategoryById = (id, body) => {
    let url = `category/${id}`;
    return request('PATCH', url, body)
};

export const deletePostById = (id) => {
    let url = `post/${id}`;
    return request('DELETE', url)
};
export const deleteCategoryById = (id) => {
    let url = `category/${id}`;
    return request('DELETE', url)
};

export const getOption = () => {
    let url = 'option';
    return request('GET', url)
};

export const updateOptionById = (id, body) => {
    let url = `option/${id}`;
    return request('PATCH', url, body)
};

export const login = (body) => {
    let url = `admin/login`;
    return request('POST', url, body)
};

export const logout = () => {
    let url = `admin/logout`;
    return request('GET', url)
};