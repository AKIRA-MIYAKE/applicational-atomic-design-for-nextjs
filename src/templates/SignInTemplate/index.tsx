import { VFC, useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useAuthContext } from '../../contexts/AuthContext'

import DefaultContainer from '../../components/DefaultContainer'

import TextField from '../../atoms/TextField'
import Label from '../../atoms/Label'
import ButtonPrimary from '../../atoms/ButtonPrimary'
import Anchor from '../../atoms/Anchor'

export interface SignInFormValues {
  nickname?: string
  password?: string
}

export interface SignInTemplateProps {
  redirect?: string
}

const SignInTemplate: VFC<SignInTemplateProps> = ({ redirect }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    errors: formErrors,
  } = useForm<SignInFormValues>()
  const watchedValues = watch()

  const { signIn } = useAuthContext()

  const [isSignInExecuting, setIsSignInExecuting] = useState(false)
  const [isSignInError, setIsSignInError] = useState(false)

  const inputIds = useMemo(() => {
    return {
      nickname: 'sing_in_nickname',
      password: 'sign_in_password',
    }
  }, [])

  const isSignInButtonDisabled = useMemo(() => {
    if (
      typeof watchedValues.nickname === 'undefined' ||
      typeof watchedValues.password === 'undefined'
    ) {
      return true
    }

    if (isSignInExecuting) {
      return true
    }

    if (
      watchedValues.nickname.length === 0 ||
      watchedValues.password.length === 0
    ) {
      return true
    }

    return false
  }, [watchedValues, isSignInExecuting])

  const onFormSubmit = useCallback<SubmitHandler<SignInFormValues>>(
    ({ nickname, password }) => {
      ;(async () => {
        if (
          typeof nickname === 'undefined' ||
          typeof password === 'undefined'
        ) {
          return
        }

        setIsSignInExecuting(true)

        const { error } = await signIn({ nickname, password })

        if (error) {
          setIsSignInExecuting(false)
          setIsSignInError(true)
          reset({ nickname, password: '' })
          return
        }

        router.push(redirect || '/')
      })()
    },
    [redirect, reset, signIn] // eslint-disable-line
  )

  return (
    <main className="w-full h-full py-10 bg-gray-100">
      <DefaultContainer>
        <div className="sm:w-96 m-auto">
          <div className="border rounded-md bg-white p-4 mb-3">
            <div className="text-center mb-3">
              <h1 className="text-xl">Sign In</h1>
            </div>

            {isSignInError && (
              <div className="mb-3">
                <p className="text-red-500">
                  The nickname or password is incorrect
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className="mb-5">
                <div className="mb-3">
                  <div className="mb-1">
                    <Label htmlFor={inputIds.nickname}>Nickname</Label>
                  </div>
                  <div>
                    <TextField
                      type="text"
                      name="nickname"
                      id={inputIds.nickname}
                      ref={register({ required: true })}
                      block={true}
                      error={!!formErrors.nickname}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <div className="mb-1">
                    <Label htmlFor={inputIds.password}>Password</Label>
                  </div>
                  <div>
                    <TextField
                      type="password"
                      name="password"
                      id={inputIds.password}
                      ref={register({ required: true })}
                      block={true}
                      error={!!formErrors.password}
                    />
                  </div>
                </div>
              </div>

              <div>
                <ButtonPrimary
                  type="submit"
                  disabled={isSignInButtonDisabled}
                  block={true}
                >
                  Sign In
                </ButtonPrimary>
              </div>
            </form>
          </div>

          <div className="text-center">
            <Link href="/about" passHref>
              <Anchor>About</Anchor>
            </Link>
          </div>
        </div>
      </DefaultContainer>
    </main>
  )
}

export default SignInTemplate
