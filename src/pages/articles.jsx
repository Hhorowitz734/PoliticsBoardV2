import React, { useEffect, useState } from 'react';
import ArticleCard from "../components/articlecard";
import Navbar from "../components/navbar";
import TrendsBar from "../components/trends_sidebar/trendsbar";
import FeedRetriever from '../components/middleware/feedretriever';


export default function Articles() {
    
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        async function fetchFeed() {
          try {
            const retrievedFeed = await FeedRetriever();
            setFeed(retrievedFeed);
          } catch (error) {
            console.log(error);
          }
        }
      
        fetchFeed();
      }, []);
      

    // Prevents site from scrolling
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = 'unset';
        };
    }, []);


    return (
        <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="grid grid-cols-3">
            <div id="articlesbar" className="max-h-screen scrollbar-thumb-gray-400 scrollbar-track-gray-300 scrollbar-thin col-span-3 lg:col-span-2 border border-l-transparent border-t-transparent border-b-tranparent px-2 overflow-x-hidden overflow-y-scroll">
            {feed && feed.length > 0 ? (
                feed.map((article, index) => <ArticleCard articleObject = {article} key={index} />)
            ) : (
                <h1 className='text-6xl font-bold'>No Posts Yet.</h1>
            )}
            
            </div>
            <TrendsBar />
        </div>
        </div>
    );
}
