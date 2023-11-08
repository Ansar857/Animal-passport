// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/../themes/theme'
import '@fontsource/inter/400.css'
import '@fontsource/chivo/700.css'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
      
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}