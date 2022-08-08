import React from 'react'
import { Link } from 'react-router-dom'

class TweetsShow extends React.Component {
  render() {
    let row = this.props.row;

    return <>
      <table className="table">
        <tbody>
          <tr>
            <th>#</th>
            <td>{row.id}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{row.title}</td>
          </tr>
          <tr>
            <th>Content</th>
            <td>{row.content}</td>
          </tr>
        </tbody>
      </table>
      <Link className="button is-small mr-3" to="/tweets">Back</Link>
      <Link className="button is-small is-success" to={`/tweets/${row.id}/edit`}>Edit</Link>
    </>
  }
}

export default TweetsShow