import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { gradientBgPurplePink } from '../utils/colors'
import { getPageTitle } from '../utils/config'
import { useAppDispatch } from '../stores/hooks'
import Guest from '../layouts/Guest'

const Index = () => {
  const dispatch = useAppDispatch()
  
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{getPageTitle('Homepage')}</title>
      </Head>
      <div className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}>
        <p>Index page</p>
      </div>
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Guest>{page}</Guest>
}

export default Index





