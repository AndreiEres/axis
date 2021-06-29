import { FC } from 'react'
import { useQuery } from 'react-query'
import { getSites } from '../../queries'
import { Site } from '../Site/Site'

export const Sites: FC = () => {
  const { data, isLoading, isError } = useQuery('sites', getSites)
  const hasData = data && data.length > 0

  return (
    <div>
      <h2>Sites</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>An error has occurred</div>}
      {!hasData && <div>No sites yet.</div>}
      {data && data.map((site) => <Site site={site} key={site.id} />)}
    </div>
  )
}
