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
        <Link className="button is-primary mb-3" to="/tweets/new">
        <i class="fas fa-cube mr-1" />
        New
      </Link>
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
                <Link className="button is-small mr-2 is-info" to={`/tweets/${row.id}`}>
                  <i className="far fa-file-alt mr-1" />
                  Show
                </Link>
                <Link className="button is-small mr-2 is-success" to={`/tweets/${row.id}/edit`}>
                  <i className="fas fa-pencil-alt mr-1" />
                  Edit
                </Link>
                <Link className="button is-small is-danger" to={`/tweets/${row.id}/edit`}>
                  <i className="fas fa-trash-alt mr-1" />
                  Delete
                </Link>
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