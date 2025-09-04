import { useState } from 'react'
import { FormNewChat } from './FormNewChat.tsx'

export function DialogueAddChat() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 transition-all cursor-pointer duration-75 ease-in hover:scale-105 text-sm text-white p-2 px-5 rounded-2xl"
      >
        Ajouter un Chat
      </button>
      {isOpen && (
        <div className="  z-20 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
          <div className="animate-fadein bg-white p-4 max-w-3xl w-full rounded-2xl z-10">
            <h2 className="text-center text-xl font-medium">Ajouter un Chat</h2>
            <FormNewChat callBack={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
