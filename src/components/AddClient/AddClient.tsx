import { useMutation } from "@apollo/client"
import React, { useState } from "react"
import CloseIcon from "../../icons/Close"
import { ADD_CLIENT } from "../../mutations"
import { GET_CLIENTS } from "../../queries"
import Button from "../Button"
import FormInput from "../FormInput"
import "./AddClient.sass"

interface Props {
  onClose: () => void
}

const CreateStory = ({ onClose }: Props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update: (cache, { data: { addClient } }) => {
      const { clients } = cache.readQuery({ query: GET_CLIENTS }) as any
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: [...clients, addClient],
        },
      })
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!(name && email && phone)) {
      return alert("Please fill out all the required fields")
    }

    addClient()
    setName("")
    setEmail("")
    setPhone("")

    onClose()
  }

  return (
    <div className="dialog__wrapper">
      <div className="dialog">
        <CloseIcon onClick={onClose} />
        <h2 className="story__title">New Client</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <FormInput value={name} onChange={setName} placeholder="Name..." />
          <FormInput
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="Email..."
          />
          <FormInput
            type="phone"
            value={phone}
            onChange={setPhone}
            placeholder="Phone..."
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateStory
