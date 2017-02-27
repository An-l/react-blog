import React, { PropTypes } from 'react'

import style from '../styles/Home.css'

class Tags extends React.Component {
    render () {
        return (
            <div className={style.about}>
                <h2>About Me</h2>
                <hr />
                <ul>
                    <li>广东大学华软软件学院，大四狗一枚</li>
                </ul>
            </div>
        )
    }
}

export default Tags;
