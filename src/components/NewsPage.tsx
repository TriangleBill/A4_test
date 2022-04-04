import React from 'react'
import Navbar from './Navbar'
import NewsCard from './NewsCard'

export default function NewsPage(): JSX.Element {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="news-page">
                    <h1 className="title news-page__title">News</h1>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>

        </>

    )
}
