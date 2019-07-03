import React from 'react'
import VideoListItem from './video_list_item'
export default ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ))
  return <ul className="col-md-4 list-group">{videoItems}</ul>
}
