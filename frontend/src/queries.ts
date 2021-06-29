import { QueryFunction, MutationFunction } from 'react-query'
import { AuthValues, Device, Site, User } from './types'
import { api } from './utils'

type GetDevicesQueryKey = [string, { siteId: number }]
export const getDevices: QueryFunction<Device[], GetDevicesQueryKey> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { siteId }] = queryKey
  return await api(`/devices/?site_id=${siteId}`)
}

type GetSitesQueryKey = [string, { username: string }]
export const getSites: QueryFunction<Site[], GetSitesQueryKey> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { username }] = queryKey
  return await api(`/sites/?owner=${username}`)
}

export const auth: MutationFunction<string, AuthValues> = async ({
  username,
  password,
}) => {
  const users: User[] = await api(
    `/users/?username=${username}&password=${password}`
  )
  return users[0]?.username
}

type GetProfileQueryKey = [string, { username: string }]
export const getProfile: QueryFunction<User, GetProfileQueryKey> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { username }] = queryKey
  const users: User[] = await api(`/users/?username=${username}`)
  return users[0]
}
