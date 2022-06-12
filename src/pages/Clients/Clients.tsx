import { useQuery } from "@apollo/client"
import { GET_CLIENTS } from "../../queries"
import ClientRow from "../../components/ClientRow"
import Button from "../../components/Button"
import { useState } from "react"
import AddClient from "../../components/AddClient"

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)
  const [isAddClientDialogOpen, setIsAddClientDialogOpen] = useState(false)

  if (loading) return <h1>Loading..</h1>
  if (error) return <h1>Something went wrong!</h1>

  return (
    <>
      <div className="clients page">
        <div className="container">
          <div className="page__header">
            <h1>Clients</h1>
            <Button onClick={() => setIsAddClientDialogOpen(true)}>
              + Add Client
            </Button>
          </div>
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
      {isAddClientDialogOpen && (
        <AddClient onClose={() => setIsAddClientDialogOpen(false)} />
      )}
    </>
  )
}

export default Clients
