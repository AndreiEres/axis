import { FC } from 'react'
import { Device as DeviceT } from '../../types'
import { Storages } from '../Storages/Storages'
import s from './styles.module.css'

type Props = {
  device: DeviceT
}

export const Device: FC<Props> = ({ device }) => {
  const title = `#${device.id} ${device.title}`
  const description = device.description
  const model = `Model ${device.model}`
  const version = `Version ${device.version}`
  const timezone = `Timezone ${device.timezone}`
  const enabled = device.enabled ? 'Enabled' : 'Disabled'
  const connected = device.connected ? 'Connected' : 'Disconnected'

  return (
    <div className={s.root}>
      <div className={s.group}>
        <div className={s.title}>{title}</div>
        <div>{description}</div>
      </div>
      <div className={s.group}>
        <div>{model}</div>
        <div>{version}</div>
      </div>
      <div className={s.group}>
        <div>{timezone}</div>
        <div>{enabled}</div>
        <div>{connected}</div>
      </div>
      <div className={s.group}>
        <Storages storages={device.storages} />
      </div>
    </div>
  )
}
