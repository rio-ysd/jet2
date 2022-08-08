import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from  '../Pagination';

class TweetsIndex extends React.Component {
  render() {
    return <>
      <div className="has-text-right">
        <Link className="button is-primary mb-3" to="/tweets/new">New</Link>
      </div>
      <div className="table-container">
        <table className="table is-fullwidth is-narrow is-hoverable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Updated At</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.rows.map((item) => <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.title}</td>
              <td>{item.updated_at}</td>
              <th className="has-text-right">
                <Link className="button is-small mr-3" to={`/tweets/${item.id}`}>Show</Link>
                <Link className="button is-small is-success" to={`/tweets/${item.id}/edit`}>Edit</Link>
              </th>
            </tr>)}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  }
}

export default TweetsIndex