import { useAtom } from 'jotai'
import { FC } from 'react'
import { authenticatedAtom } from '../atoms'
import { Auth } from '../components/Auth/Auth'
import { Profile } from '../components/Profile/Profile'
import { Sites } from '../components/Sites/Sites'

export const Dashboard: FC = () => {
  const [authenticated] = useAtom(authenticatedAtom)

  if (!authenticated) return <Auth />

  return (
    <div>
      <Profile />
      <Sites />
    </div>
  )
}
