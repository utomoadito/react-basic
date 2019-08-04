import React from 'react'
import './Post.css'

class Post extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
    this.state = {
      model: ''
    }
  }

  // methods
  onType(event) {
    this.setState({
      model: event.target.value
    })
  }

  render() {
    const profile = this.props.profile

    return (
      <article className="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="/cwo2.png" alt={ profile.name } />
            </div>
            <div className="Post-user-nickname">
              <span>{ profile.name }</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
          </div>
        </div>
        <div className="Post-caption">
          <strong>{ profile.name }</strong> Moving the community! { this.state.model }
        </div>
        <input type="text" onKeyUp={this.onType.bind(this)} />
      </article>
    ) 
  }
}
export default Post