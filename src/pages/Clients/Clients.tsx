import { useQuery } from "@apollo/client"
import { GET_CLIENTS } from "../../queries"
import ClientRow from "../../components/ClientRow"

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)

  if (loading) return <h1>Loading..</h1>
  if (error) return <h1>Something went wrong!</h1>

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
              {data.clients.map((client: any) => (
                <ClientRow client={client} key={client.id} />
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default Clients
