import * as React from 'react'

type WrapperProps = { children: React.ReactNode }

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div data-slot="div" className="max-w-5xl m-auto w-full px-8">
      {children}
    </div>
  )
}
