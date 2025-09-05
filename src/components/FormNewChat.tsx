import { useState } from 'react'
import { useChats } from '../contexts/ChatContext.tsx'
import type { ChatType } from '../contexts/types.ts'

export function FormNewChat({ callBack }: { callBack: () => void }) {
  const { chatDispatch } = useChats()

  const [newChat, setNewChat] = useState<ChatType>({
    id: new Date().toISOString(),
    nom: '',
    description: '',
    age: 1,
    couleur: '',
    race: '',
    statut: 'pensionnaire',
  })

  const classNameInput =
    'border-2 focus:border-gray-500 border-gray-200 p-2 rounded-xl'

  function addNewChat() {
    chatDispatch({
      type: 'add',
      payload: newChat,
    })

    setNewChat({
      id: new Date().toISOString(),
      nom: '',
      description: '',
      age: 1,
      couleur: '',
      race: '',
      statut: 'pensionnaire',
    })
    callBack()
  }
  return (
    <form className="grid gap-4" action={addNewChat}>
      {/*Nom*/}
      <div className="grid gap-2">
        <label htmlFor="nom " className="font-medium">
          Nom
        </label>
        <input
          id="nom"
          type="text"
          placeholder="Nom"
          className={classNameInput}
          value={newChat.nom}
          onChange={(e) => setNewChat({ ...newChat, nom: e.target.value })}
        />
      </div>

      {/*  Description */}
      <div className="grid gap-2">
        <label htmlFor="description " className="font-medium">
          Description
        </label>
        <textarea
          id="description"
          className={classNameInput}
          value={newChat.description}
          onChange={(e) =>
            setNewChat({ ...newChat, description: e.target.value })
          }
        />
      </div>

      {/*Couleur*/}
      <div className="grid gap-2">
        <label htmlFor="couleur " className="font-medium">
          Couleur
        </label>
        <input
          id="couleur"
          type="text"
          placeholder="Couleur du chat"
          className={classNameInput}
          value={newChat.couleur}
          onChange={(e) => setNewChat({ ...newChat, couleur: e.target.value })}
        />
      </div>

      {/*Age*/}
      <div className="grid gap-2">
        <label htmlFor="Age " className="font-medium">
          Age (en années)
        </label>
        <input
          id="Age"
          type="number"
          placeholder=""
          className={classNameInput}
          value={newChat.age}
          onChange={(e) =>
            setNewChat({ ...newChat, age: Number(e.target.value) })
          }
        />
      </div>

      {/*Race*/}
      <div className="grid gap-2">
        <label htmlFor="race " className="font-medium">
          Race
        </label>
        <input
          id="race"
          type="text"
          placeholder="Race du chat"
          className={classNameInput}
          value={newChat.race}
          onChange={(e) => setNewChat({ ...newChat, race: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 transition-all cursor-pointer duration-75 ease-in hover:scale-[102%] text-sm text-white p-2 px-5 rounded-2xl"
      >
        Ajouter le chat
      </button>
    </form>
  )
}
