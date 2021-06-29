import { QueryFunction } from 'react-query'
import { Device, Site } from './types'
import { api } from './utils'

type GetDevicesQueryKey = [string, { siteId: number }]
export const getDevices: QueryFunction<Device[], GetDevicesQueryKey> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { siteId }] = queryKey
  return await api(`/devices/?site_id=${siteId}`)
}

export const getSites: QueryFunction<Site[]> = async () => await api('/sites/')
