import { useAtom } from 'jotai'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { usernameAtom } from '../../atoms'
import { getProfile } from '../../queries'
import s from './styles.module.css'

export const Profile: FC = () => {
  const [username, setUsername] = useAtom(usernameAtom)
  const { data, isLoading, isError } = useQuery(
    ['profile', { username }],
    getProfile
  )
  const name = data?.username
  const logout = () => setUsername('')

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error has occurred</div>

  return (
    <div className={s.root}>
      <div className={s.avatar} />
      <div className={s.name}>{name}</div>
      <button className={s.logout} onClick={logout}>
        Logout
      </button>
    </div>
  )
}
