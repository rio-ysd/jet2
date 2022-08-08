import React from 'react';
import Show from  '../../views/Tweets/Show';

class TweetsShow extends React.Component {
  constructor(props) {
		super(props);
	}

  componentDidMount() {
    fetch(`/api/tweets/${1}`).then((resp) => {
      if (resp.status != 200) return;

      resp.json().then((respJson) => {
        this.setState({respJson: respJson});
      })
    });
	}

  render() {
    let respJson = (this.state || {}).respJson;

    return <Show row={respJson || {}} />
  }
}

export default TweetsShow