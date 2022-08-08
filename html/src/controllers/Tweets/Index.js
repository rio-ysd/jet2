import React from 'react';
import Index from  '../../views/Tweets/Index';

class TweetsIndex extends React.Component {
	componentDidMount() {
    fetch('/api/tweets').then((resp) => {
      if (resp.status != 200) return;

      resp.json().then((respJson) => {
        this.setState({respJson: respJson});
      })
    })
	}

  render() {
    let respJson = (this.state || {}).respJson;

    return <Index rows={respJson || []} />
  }
}

export default TweetsIndex