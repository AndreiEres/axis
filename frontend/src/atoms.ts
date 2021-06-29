import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const usernameAtom = atomWithStorage<string>('', '')
export const authenticatedAtom = atom((get) => Boolean(get(usernameAtom)))
