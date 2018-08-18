import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageurl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left video-item">
                    <img src={imageurl} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;