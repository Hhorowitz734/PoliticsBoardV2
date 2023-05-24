import {React, useEffect} from 'react';

import ArticleCard from "../components/articlecard"
import Navbar from "../components/navbar"
import TrendsBar from "../components/trends_sidebar/trendsbar"

export default function Articles() {


    //Prevents site from scrolling
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, []);


    return (
        <div class="flex flex-col min-h-screen bg-white">
            <div>
                <Navbar />
                <div className="grid grid-cols-3">
                    <div id="articlesbar" className="max-h-screen scrollbar-thumb-gray-400 scrollbar-track-gray-300 scrollbar-thin col-span-3 lg:col-span-2 border border-l-transparent border-t-transparent border-b-tranparent px-2 overflow-x-hidden overflow-y-scroll">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                    <TrendsBar />
                </div>
            </div>
        </div>
    )
}