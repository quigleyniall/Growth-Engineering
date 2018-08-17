import React, {Component} from 'react'
import './App.css'

class YoutubeList extends Component {
  constructor(){
    super();
  }

  render(){
    const {youtube, onChangeVideo} = this.props
    return youtube.map((item) => {
      return (
        <a className="youtube-links" onClick={onChangeVideo} name={item.snippet.title}>
          <img src={item.snippet.thumbnails.medium.url} className="youtube-image" />
          <div className="thumbnail-details">
            <div className="youtube-title">{item.snippet.title}</div>
            <div className="youtube-channel">{item.snippet.channelTitle}</div>
          </div>
        </a>
      )
    })
  }
}

export default YoutubeList
