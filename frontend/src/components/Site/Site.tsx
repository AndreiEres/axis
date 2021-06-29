import { useState } from 'react'
import { FC } from 'react'
import { Site as SiteT } from '../../types'
import { Devices } from '../Devices/Devices'
import s from './styles.module.css'

type Props = {
  site: SiteT
}

export const Site: FC<Props> = ({ site }) => {
  const [expanded, setExpanded] = useState(false)
  const title = `#${site.id} ${site.title}`

  const toggle = () => setExpanded(!expanded)

  return (
    <div className={s.root}>
      <div className={s.info} onClick={toggle}>
        <div>{title}</div>
      </div>
      {expanded && (
        <div className={s.devices}>
          <Devices siteId={site.id} />
        </div>
      )}
    </div>
  )
}
