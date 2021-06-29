import { Provider } from 'jotai'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Dashboard } from './Dashboard/Dashboard'
import './App.css'

const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
