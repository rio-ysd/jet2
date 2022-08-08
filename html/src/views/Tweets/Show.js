import App from '../App';
import Loading from '../Loading';
import { Link } from 'react-router-dom'

class TweetsShow extends App {
  render() {
    let row = this.props.row;
    if (!row) return <Loading />;

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
          <tr>
            <th>Created At</th>
            <td>{row.created_at.toDatetime().format('yyyy/mm/dd hh:ii')}</td>
          </tr>
          <tr>
            <th>Updated At</th>
            <td>{row.updated_at.toDatetime().format('yyyy/mm/dd hh:ii')}</td>
          </tr>
        </tbody>
      </table>
      <Link className="button is-small mr-3" to="/tweets">
        <i className="fas fa-chevron-left mr-1" />
        Back
      </Link>
      <Link className="button is-small is-success" to={`/tweets/${row.id}/edit`}>
        <i className="fas fa-pencil-alt mr-1" />
        Edit
      </Link>
    </>
  }
}

export default TweetsShow