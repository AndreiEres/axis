import { FC } from 'react'
import { Storage as StorageT } from '../../types'
import { Storage } from '../Storage/Storage'

type Props = {
  storages: StorageT[]
}

export const Storages: FC<Props> = ({ storages }) => {
  const hasStorages = storages.length > 0

  return (
    <div>
      <div>Storages</div>
      {!hasStorages && <div>...</div>}
      {storages.map((storage) => (
        <Storage storage={storage} key={storage.id} />
      ))}
    </div>
  )
}
