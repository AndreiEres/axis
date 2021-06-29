import { FC } from 'react'
import { Site as SiteT } from '../../types'
import s from './styles.module.css'

type Props = {
  site: SiteT
}

export const Site: FC<Props> = ({ site }) => {
  const id = `#${site.id}`
  const title = site.title
  const owner = `Owner: ${site.owner}`

  return (
    <div className={s.root}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{owner}</div>
    </div>
  )
}
