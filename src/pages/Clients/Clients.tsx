import { useQuery } from "@apollo/client"
import TrashIcon from "../../icons/Trash"
import { GET_CLIENTS } from "../../queries"

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)

  if (loading) return <h1>Loading..</h1>
  if (error) return <h1>Something went wronh!</h1>

  return (
    <div className="clients page">
      <div className="container">
        <h1>Clients</h1>
        {
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((c: any) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>
                    <div
                      role="button"
                      aria-label="Remove"
                      className="table__icon danger"
                    >
                      <TrashIcon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default Clients
