import { SectionAdopte } from './components/SectionAdopte.tsx'
import { SectionPensionnaire } from './components/SectionPensionnaire.tsx'
import Wrapper from './components/wrapper.tsx'
import { ChatProvider } from './contexts/ChatContext.tsx'

function App() {
  return (
    <ChatProvider>
      <Wrapper>
        <h1 className="text-3xl font-serif text-amber-950 pt-4 text-center">
          Cat's and coffee
        </h1>
        <SectionPensionnaire />
        <SectionAdopte />
      </Wrapper>
    </ChatProvider>
  )
}

export default App
