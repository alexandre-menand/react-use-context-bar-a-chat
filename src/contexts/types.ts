import type { ActionDispatch } from 'react'

export type StatusPensionnaireType = 'adopté' | 'pensionnaire'

export type ChatType = {
  id: string
  nom: string
  age: number
  couleur: string
  race?: string
  description: string
  status: StatusPensionnaireType
}

export type ChatActionType = {
  type: 'add' | 'update' | 'remove'
  payload: ChatType
}

export type ChatProviderType = {
  state: ChatType[]
  dispatch: ActionDispatch<[action: ChatActionType]>
}
