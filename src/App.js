import React, {Component} from 'react'
import './App.css'
import YouTube from 'react-youtube'
import YoutubeList from './youtubelist'

class App extends Component {
  constructor() {
    super();
    this.state = ({
      youtube: [],
      videoId: "",
      desc: "",
      title: ""
    })
  }
  componentDidMount(){
  fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=5&playlistId=UUTI5S0PqpgB0DbYgcgRU6QQ&key=AIzaSyB_0yaTS-HzGM33iseYfGmit5O8sI05PY0")
  .then(res => res.json())
  .then(res => res.items)
  .then(data => {this.setState({
    youtube: data,
    desc: data[0].snippet.description,
    title: data[0].snippet.title,
    videoId: data[0].contentDetails.videoId
  })})
}

  onChangeVideo = (event) => {
    const title = event.currentTarget.name
    let {youtube} = this.state
    let filtered = youtube.filter((video) => {
      return video.snippet.title == title
    })
  this.setState({
    videoId: filtered[0].contentDetails.videoId,
    desc: filtered[0].snippet.description,
    title
  })
  }

  render(){
    const opts = {
      height: '390',
      width: '100%'
    };

    return(
      <div className="youtube-container">
        <div className="youtube-player">
          <YouTube
            videoId={this.state.videoId}
            opts={opts}
            onReady={this._onReady}
          />
          <div className="youtube-main-title">{this.state.title}</div>
          <div className="youtube-desc">{this.state.desc}</div>
        </div>
        <div className="youtube-list">
          <YoutubeList youtube={this.state.youtube} onChangeVideo={this.onChangeVideo}/>
        </div>
    </div>
    )
  }
}

export default App
