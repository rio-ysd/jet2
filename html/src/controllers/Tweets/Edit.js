import React from 'react';
import TweetsShow from  './Show';
import Edit from  '../../views/Tweets/Edit';

class TweetsEdit extends TweetsShow {
	handleSubmit(e) {
		e.preventDefault();

    const body = new FormData(e.target);
    const id = body.get('id');
    body.delete('id');

    let url = '/api/tweets';
		let method = 'POST';
		if (id) {
			url += `/${id}`;
			method = 'PATCH';
		}

    fetch(url, {method: method, body}).then((resp) => {
      console.log(resp);
    });
	}

  render() {
    let respJson = (this.state || {}).respJson;

    return <Edit row={respJson || {}} />
  }
}

export default TweetsEdit