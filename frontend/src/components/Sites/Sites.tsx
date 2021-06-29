import { FC } from 'react'
import { useQuery } from 'react-query'
import { Site as SiteT } from '../../types'
import { api } from '../../utils'
import { Site } from '../Site/Site'

const getSites = async (): Promise<SiteT[]> => await api('/sites/')

export const Sites: FC = () => {
  const { data, isLoading, isError } = useQuery('sites', getSites)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error has occurred</div>

  return <>{data && data.map((site) => <Site site={site} key={site.id} />)}</>
}
