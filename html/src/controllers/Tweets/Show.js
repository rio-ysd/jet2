import App from '../App';
import Show from '../../views/Tweets/Show';

class TweetsShow extends App {
  // constructor(props) {
	// 	super(props);
	// }

  componentDidMount() {
    fetch(`/api/tweets/${1}`).then((resp) => {
      if (resp.status !== 200) return;

      resp.json().then((respJson) => {
        this.setState({respJson: respJson});
      })
    });
	}

  render() {
    return <Show row={(this.state || {}).respJson} />
  }
}

export default TweetsShow