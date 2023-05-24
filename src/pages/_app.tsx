import { client } from '@/graphql/apollo-client'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  )
}
