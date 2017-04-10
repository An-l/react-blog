import { Link } from 'react-router';

const errPage = () => {
    return (
        <section className='err'>
            <h2 className='title'>404 Not Found</h2>
            <p>你要找的页面不存在。</p>

            <p>请检查URL是否有误，或者查看本博客<Link to='/archive'>所有文章</Link>。</p>
        </section>
    )
}

export default errPage;