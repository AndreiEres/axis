import { FC } from 'react'
import { Storage as StorageT } from '../../types'

type Props = {
  storage: StorageT
}

export const Storage: FC<Props> = ({ storage }) => {
  const row = `${storage.id}: ${storage.state}`

  return <div>{row}</div>
}
