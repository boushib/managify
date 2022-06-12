import { useMutation } from "@apollo/client"
import TrashIcon from "../../icons/Trash"
import { Client } from "../../models"
import { DELETE_CLIENT } from "../../mutations"
import { GET_CLIENTS } from "../../queries"

interface Props {
  client: Client
}

const ClientRow = ({ client }: Props) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update: (cache, { data: { deleteClient } }) => {
      const { clients } = cache.readQuery({ query: GET_CLIENTS }) as any
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((c: Client) => c.id !== deleteClient.id),
        },
      })
    },
  })
  const { id, name, email, phone } = client

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <div
          role="button"
          aria-label="Remove"
          className="table__icon danger"
          onClick={() => deleteClient()}
        >
          <TrashIcon />
        </div>
      </td>
    </tr>
  )
}

export default ClientRow
