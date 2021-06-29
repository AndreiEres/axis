import { useAtom } from 'jotai'
import { FC } from 'react'
import { Field, Form } from 'react-final-form'
import { useMutation } from 'react-query'
import { usernameAtom } from '../../atoms'
import { auth } from '../../queries'
import { AuthValues } from '../../types'
import s from './styles.module.css'

const validateAuth = (values: AuthValues) => {
  const errors: Record<string, unknown> = {}

  if (!values.username) errors.username = 'Required'
  if (!values.password) errors.password = 'Required'

  return errors
}

export const Auth: FC = () => {
  const [username, setUsername] = useAtom(usernameAtom)

  const { mutate, error } = useMutation(auth, {
    onSuccess: (data) => {
      if (data) setUsername(data)
    },
  })
  const onSubmit = (values: AuthValues) => mutate(values)

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateAuth}
      render={({
        handleSubmit,
        submitting,
        submitSucceeded,
        pristine,
        invalid,
        dirtySinceLastSubmit,
      }) => (
        <form className={s.root} onSubmit={handleSubmit}>
          <h2>Sign in</h2>

          <label className={s.label}>Username</label>
          <Field
            name='username'
            component='input'
            type='text'
            placeholder='Username'
            className={s.input}
          />
          <label className={s.label}>Password</label>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='Password'
            className={s.input}
          />
          <button
            type='submit'
            disabled={submitting || pristine || invalid}
            className={s.submit}
          >
            Submit
          </button>
          {!dirtySinceLastSubmit && error && (
            <div className={s.error}>An error has occurred</div>
          )}
          {submitSucceeded && !dirtySinceLastSubmit && !error && !username && (
            <div className={s.error}>User not found</div>
          )}
        </form>
      )}
    />
  )
}
