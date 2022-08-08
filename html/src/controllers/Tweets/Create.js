import React from 'react'
import { Link } from 'react-router-dom'
import TweetsEdit from  './Edit';

class TweetsCreate extends TweetsEdit {
  componentDidMount() {
    this.setState({respJson: {}});
	}
}

export default TweetsCreate