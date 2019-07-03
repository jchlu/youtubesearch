import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = process.env.API_KEY
// Create a new component to produce HTML

const App = ({ apiKey }) => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videoSearch = term => {
    YTSearch({ key: apiKey, term: term }, videos => {
      setVideos(videos)
      setSelectedVideo(videos[0])
    })
  }
  const throttledVideoSearch = _.debounce(term => { videoSearch(term) }, 500)
  useEffect(() => {
    videoSearch('skimboards')
  }, [])
  return (
    <div>
      <SearchBar onSearchTermChange={throttledVideoSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)}
        videos={videos}
      />
    </div>
  )
}

// Inject this into the DOM
ReactDOM.render(<App apiKey={API_KEY} />, document.getElementById('app'))
