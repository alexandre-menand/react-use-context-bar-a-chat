import { createContext, useContext, useReducer } from 'react'

import type { ChatActionType, ChatProviderType, ChatType } from './types.ts'

const initChat: ChatType[] = [
  {
    id: '1',
    nom: 'Moustache',
    age: 3,
    couleur: 'gris',
    race: 'européen',
    description: 'Très câlin, adore les grattouilles derrière les oreilles.',
    statut: 'adopté',
  },
  {
    id: '2',
    nom: 'Felix',
    age: 5,
    couleur: 'noir',
    race: 'chartreux',
    description: 'Calme et indépendant, parfait pour une maison tranquille.',
    statut: 'pensionnaire',
  },
  {
    id: '3',
    nom: 'Luna',
    age: 2,
    couleur: 'blanc',
    race: 'persan',
    description: 'Joueur et énergique, aime les enfants.',
    statut: 'adopté',
  },
  {
    id: '4',
    nom: 'Simba',
    age: 4,
    couleur: 'roux',
    race: 'maine coon',
    description: 'Grand et majestueux, très sociable avec les autres animaux.',
    statut: 'pensionnaire',
  },
  {
    id: '5',
    nom: 'Chloe',
    age: 1,
    couleur: 'tigré',
    race: 'bengal',
    description: 'Curieuse et espiègle, a besoin de beaucoup d’attention.',
    statut: 'adopté',
  },
]

/**
 * Initialisation du contexte pour la gestion des chats
 */

const ChatContext = createContext<ChatProviderType | null>(null)

/**
 * Le composant ProviderChat permet d'englober la partie de l'application
 * où l'on souhaite inclure le state management des chats.
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
 * Le reducer gère les mises à jour de l'état de manière prévisible
 * pour le Provider.
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
 * Hook personnalisé permettant d'accéder et de manipuler facilement
 * le contexte des chats dans l'application.
 */
function useChats() {
  const chatContext = useContext(ChatContext) as ChatProviderType
  return { chats: chatContext.state, chatDispatch: chatContext.dispatch }
}

export { ChatProvider, useChats }
