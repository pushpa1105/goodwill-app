'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}
