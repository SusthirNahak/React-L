import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className='container my-3' >
                <h1 className='py-2'>News Hub - Top Headlines</h1>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="my description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="my description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="my description" />
                    </div>
                </div>

            </div>
        )
    }
}
