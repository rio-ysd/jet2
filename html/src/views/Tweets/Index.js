import App from '../App';
import Loading from '../Loading';
import Pagination from  '../Pagination';
import { Link } from 'react-router-dom';

class TweetsIndex extends App {
  render() {
    let rows = this.props.rows;
    if (!rows) return <Loading />;
  
    return <>
      <div className="has-text-right">
        <Link className="button is-primary mb-3" to="/tweets/new">New</Link>
      </div>
      <div className="table-container">
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Updated At</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => <tr key={row.id}>
              <th>{row.id}</th>
              <td>{row.title}</td>
              <td>{row.updated_at.toDatetime().format('yyyy/mm/dd hh:ii')}</td>
              <th className="has-text-right">
                <Link className="button is-small mr-3" to={`/tweets/${row.id}`}>Show</Link>
                <Link className="button is-small is-success" to={`/tweets/${row.id}/edit`}>Edit</Link>
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