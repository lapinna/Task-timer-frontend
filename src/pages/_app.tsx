import '../styles/global.scss'
import { client } from '@/graphql/apollo-client'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import { Provider } from 'react-redux'
import store from './../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <AuthProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
    </Provider>
  )
}
