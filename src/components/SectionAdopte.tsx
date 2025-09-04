import { useChats } from '../contexts/ChatContext.tsx'
import CardChat from './CardChat.tsx'

export function SectionAdopte() {
  const { chats } = useChats()
  const chatsAdopte = chats.filter((chat) => chat.status === 'adopté')
  if (chatsAdopte.length === 0) return null
  return (
    <section className="my-16">
      <h2 className="mb-8 text-xl font-serif text-amber-950">
        Les chats adoptés
      </h2>
      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2">
        {chatsAdopte.reverse().map((chat) => (
          <CardChat key={chat.id} chat={chat} />
        ))}
      </div>
    </section>
  )
}
