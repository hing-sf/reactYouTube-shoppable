import axios from 'axios';
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAEegoUppdyrqlMxFuxgKmBJi0mUV58PMo';
const BING_API_KEY = 'f3be3b2829a3440584c354c69561e9d1';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trendingCelebs: {},
            videos: [],
            selectedVideo: null,
            searchTerm: 'javascript'
         };
         this.videoSearch('surfboards')

        let term = 'Actor';
        let url = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=Trending+${ term }&count=20&offset=0&mkt=en-us&safeSearch=Moderate`;

        self = this;
        axios.get(url, {
            headers: { "Ocp-Apim-Subscription-Key": BING_API_KEY }
            })
            .then( function(res)  {
                self.setState({ trendingCelebs: res.data.queryExpansions })
        })
    }

    videoSearch( term ) {
        YTSearch({ key: API_KEY, term: term}, ( videos ) => {
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
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList
                onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                videos={ this.state.videos } />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))