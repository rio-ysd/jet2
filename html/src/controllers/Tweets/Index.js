import App from '../App';
import Index from '../../views/Tweets/Index';

class TweetsIndex extends App {
	componentDidMount() {
    console.log(999)
    fetch('/api/tweets').then((resp) => {
      if (resp.status !== 200) return;

      resp.json().then((respJson) => {
        this.setState({respJson: respJson});
      })
    })
	}

  render() {
    return <Index rows={(this.state || {}).respJson} />
  }
}

export default TweetsIndex