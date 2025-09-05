import { useChats } from '../contexts/ChatContext.tsx'
import CardChat from './CardChat.tsx'
import { DialogueAddChat } from './DialogueAddChat.tsx'

export function SectionPensionnaire() {
  const { chats } = useChats()
  const chatPensionnaire = chats.filter(
    (chat) => chat.statut === 'pensionnaire',
  )
  return (
    <section className="my-16">
      <div className="flex items-center gap-2 mb-8">
        <div>
          <h2 className=" text-xl font-serif text-blue-950">
            Les pensionnaires de Cat's and Coffee
          </h2>
        </div>

        <DialogueAddChat />
      </div>

      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2">
        {chatPensionnaire.length !== 0 ? (
          chatPensionnaire
            .reverse()
            .map((chat) => <CardChat key={chat.id} chat={chat} />)
        ) : (
          <div>Il n'y a pas de chat à adopté</div>
        )}
      </div>
    </section>
  )
}
