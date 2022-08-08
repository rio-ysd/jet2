import App from '../App';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

class TweetsEdit extends App {
  render() {
    let row = this.props.row;
    if (!row) return <Loading />;

    return <>
      <form onSubmit={this.handleSubmit}>
        <table className="table">
          <tfoot>
            <tr>
              <th />
              <th>
                  <button className="button is-small is-success">Update</button>
              </th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>#</th>
              <td>{row.id}<input name="id" type="hidden" defaultValue={row.id} /></td>
            </tr>
            <tr>
              <th>Title</th>
              <td><input name="tweet[title]" className="input is-primary" defaultValue={row.title} /></td>
            </tr>
            <tr>
              <th>Content</th>
              <td><textarea name="tweet[content]" className="textarea" defaultValue={row.content} /></td>
            </tr>
          </tbody>
        </table>
      </form>
      <Link className="button is-small mr-3" to="/tweets">Back</Link>
      <Link className="button is-small is-info" to={`/tweets/${row.id}`}>Show</Link>
    </>
  }
}

export default TweetsEdit