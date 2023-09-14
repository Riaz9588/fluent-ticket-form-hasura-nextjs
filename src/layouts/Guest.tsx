import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function LayoutGuest({ children }: Props) {


  return (
    <div className=''>
      <p>Guest Layout</p>
      <div className="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">{children}</div>
    </div>
  )
}
