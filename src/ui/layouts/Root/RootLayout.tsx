import React, { type ReactElement } from 'react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <div className="grid grid-cols-[repeat(_16,_1fr)]">
      {children}
    </div>
  )
}
