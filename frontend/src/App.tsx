import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Sites } from './components/Sites/Sites'
import './App.css'

const queryClient = new QueryClient()

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Sites />
  </QueryClientProvider>
)

export default App
