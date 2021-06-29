export type Site = {
  id: number
  title: string
  owner: string
}

export type Device = {
  id: number
  site_id: number
  title: string
  description: string
  model: string
  version: string
  enabled: boolean
  connected: boolean
  timezone: string
  storages: Storage[]
}

export type Storage = {
  id: string
  state: string
}
