import { RiCakeFill, RiPaletteFill, RiVipCrown2Fill } from '@remixicon/react'
import { useState, useTransition } from 'react'
import chatIcon from '../assets/catIcon.svg'
import deleteIcon from '../assets/deleteIcon.svg'
import { useChats } from '../contexts/ChatContext.tsx'
import type { ChatType } from '../contexts/types.ts'

export default function CardChat({ chat }: { chat: ChatType }) {
  const { chatDispatch } = useChats()

  const [, startTransition] = useTransition()
  const [remove, setRemove] = useState<boolean>(false)

  function deleteChat() {
    setRemove(true)
    startTransition(() => {
      setTimeout(() => {
        chatDispatch({
          type: 'remove',
          payload: chat,
        })
      }, 200)
    })
  }

  return (
    <article
      className={
        (chat.status === 'adopté'
          ? 'bg-amber-50 text-amber-950'
          : 'bg-blue-50 text-blue-950') +
        (remove && ' animate-fadeout opacity-0 ') +
        ' rounded-2xl p-4 grid gap-2 group h-auto animate-fadein '
      }
    >
      <div className="origin-left transition-all duration-75 flex gap-4 items-center lg:scale-75 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100 ">
        <ButtonDelete callBack={deleteChat} />

        {chat.status === 'pensionnaire' && <ButtonAdopte chat={chat} />}
      </div>

      <div className="flex justify-center">
        <img src={chatIcon} alt="" className="h-30" />
      </div>
      <h3 className="text-lg font-medium font-serif">{chat.nom}</h3>
      <p className="text-sm">{chat.description}</p>
      <div className="flex text-xs gap-4 text-gray-500">
        <span className="flex items-center gap-1">
          <RiCakeFill size={16} />
          {chat.age} ans
        </span>
        <span className="flex items-center gap-1">
          <RiPaletteFill size={16} /> {chat.couleur}
        </span>
        {chat.race && (
          <span className="flex items-center gap-1">
            <RiVipCrown2Fill size={16} /> {chat.race}
          </span>
        )}
      </div>
    </article>
  )
}

function ButtonAdopte({ chat }: { chat: ChatType }) {
  const { chatDispatch } = useChats()

  function adopte() {
    chatDispatch({
      type: 'update',
      payload: {
        ...chat,
        status: 'adopté',
      },
    })
  }

  return (
    <button
      className="bg-blue-500 transition-all cursor-pointer duration-75 ease-in hover:scale-105 text-sm text-white p-2 px-5 rounded-2xl"
      onClick={adopte}
    >
      Ce chat vient d'être adopté
    </button>
  )
}

function ButtonDelete({ callBack }: { callBack: () => void }) {
  return (
    <button
      className=" bg-gray-200 p-2 cursor-pointer hover:bg-red-200 rounded-2xl flex hover:scale-105 transition-all duration-75 ease-in"
      onClick={callBack}
    >
      <img src={deleteIcon} alt="" width={20} height={20} />
    </button>
  )
}
