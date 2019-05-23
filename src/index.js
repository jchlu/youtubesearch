import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = process.env.API_KEY
// Create a new component to produce HTML

class App extends Component {
  constructor (props) {
    super(props)
    this.apiKey = props.apiKey
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('skimboards')
  }

  videoSearch (term) {
    YTSearch({ key: this.apiKey, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const throttledVideoSearch = _.debounce(term => { this.videoSearch(term) }, 500)
    return (
      <div>
        <SearchBar onSearchTermChange={throttledVideoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

// Inject this into the DOM
ReactDOM.render(<App apiKey={API_KEY} />, document.getElementById('app'))
