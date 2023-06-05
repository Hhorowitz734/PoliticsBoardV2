import React, { Component, useEffect, useState } from 'react';

import ArticleCard from "../components/articlecard";
import Navbar from "../components/navbar";
import TrendsBar from "../components/trends_sidebar/trendsbar";

import FeedRetriever from '../components/middleware/feedretriever';
import TagFeedRetriever from '../components/middleware/tagfeedretriever';
import Verifier from '../components/middleware/verifier';

class Articles extends Component {

  constructor(props){
    super(props)
    
    this.tagID = this.props.tagID === undefined ? null : this.props.tagID;

    this.state = {
      feed: null,
      user: null
    }
  }

  async componentDidMount() {
    try {
      await this.fetchFeed();
      await this.fetchUser();
      document.body.style.overflow = 'hidden';
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  async fetchFeed() {
    let retrievedFeed;
    if(this.tagID){
      const tag = await TagFeedRetriever(this.tagID);
      retrievedFeed = tag.articles; 
      retrievedFeed = retrievedFeed.filter((value) => value !== null);
    } else {
      retrievedFeed = await FeedRetriever();
    }
    this.setState({ feed : retrievedFeed.reverse() }) 
  }

  async fetchUser() {
    const userobj = await Verifier();
    this.setState({ user : userobj }) 
  }

  render() {

    const {user, feed} = this.state;

    return(
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
    )
  }

  

}

export default Articles;