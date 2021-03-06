import axios from 'axios';
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YouTubePlayer from './components/youtubePlayer';

const API_KEY = require('../config/key');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
         };
         this.videoSearch('javascript')
    }

    videoSearch( term ) {
        YTSearch({ key: API_KEY.GOOGLE_API_KEY, term: term}, ( videos ) => {

            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        const videoSearch = _.debounce(( term ) => { this.videoSearch( term ) }, 300);

        return (
            <div>
            <SearchBar onSearchTermChange={ videoSearch } />
            <YouTubePlayer video={ this.state.selectedVideo } />
            {/* <VideoDetail video={ this.state.selectedVideo } /> */}

            <VideoList
                onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                videos={ this.state.videos } />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))