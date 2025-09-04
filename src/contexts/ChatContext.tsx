import { createContext, useContext, useReducer } from 'react'

import type { ChatActionType, ChatProviderType, ChatType } from './types.ts'

const ChatContext = createContext<ChatProviderType | null>(null)

const initChat: ChatType[] = [
  {
    id: '1',
    nom: 'Moustache',
    age: 3,
    couleur: 'gris',
    race: 'européen',
    description: 'Très câlin, adore les grattouilles derrière les oreilles.',
    status: 'adopté',
  },
  {
    id: '2',
    nom: 'Felix',
    age: 5,
    couleur: 'noir',
    race: 'chartreux',
    description: 'Calme et indépendant, parfait pour une maison tranquille.',
    status: 'pensionnaire',
  },
  {
    id: '3',
    nom: 'Luna',
    age: 2,
    couleur: 'blanc',
    race: 'persan',
    description: 'Joueur et énergique, aime les enfants.',
    status: 'adopté',
  },
  {
    id: '4',
    nom: 'Simba',
    age: 4,
    couleur: 'roux',
    race: 'maine coon',
    description: 'Grand et majestueux, très sociable avec les autres animaux.',
    status: 'pensionnaire',
  },
  {
    id: '5',
    nom: 'Chloe',
    age: 1,
    couleur: 'tigré',
    race: 'bengal',
    description: 'Curieuse et espiègle, a besoin de beaucoup d’attention.',
    status: 'adopté',
  },
]

/**
 * Le ProviderChat va permettre "d'englober" la partie de l'application
 * ou l'on souhaite inclure le state management de nos chats
 */
function ChatProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initChat)

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}

/**
 * Le Reducer permet de simplifier les modification de l'Etat dans le Provider
 */
function chatReducer(chats: ChatType[], action: ChatActionType): ChatType[] {
  const { type, payload } = action
  switch (type) {
    case 'add':
      return [...chats, payload]

    case 'update':
      return chats.map((chat) => {
        let newChat = chat
        if (chat.id === payload.id) {
          newChat = payload
        }
        return newChat
      })

    case 'remove':
      return chats.filter((chat) => chat.id !== payload.id)
  }
}

/**
 * Création d'un Hook pour une gestion simplifier des contexts dans l'application
 */
function useChats() {
  const chatContext = useContext(ChatContext) as ChatProviderType
  return { chats: chatContext.state, chatDispatch: chatContext.dispatch }
}

export { ChatProvider, useChats }
