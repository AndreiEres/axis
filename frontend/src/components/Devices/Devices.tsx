import { FC } from 'react'
import { useQuery } from 'react-query'
import { getDevices } from '../../queries'
import { Device } from '../Device/Device'
import s from './styles.module.css'

type Props = {
  siteId: number
}

export const Devices: FC<Props> = ({ siteId }) => {
  const { data, isLoading, isError } = useQuery(
    ['devices', { siteId }],
    getDevices
  )

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error has occurred</div>

  return (
    <div className={s.root}>
      {data && data.map((device) => <Device device={device} key={device.id} />)}
    </div>
  )
}
