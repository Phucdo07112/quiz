import React from 'react'
import {Navbar} from './_components/navbar'

type Props = {}

const BrowseLayout = ({children}: { children: React.ReactNode}) => {
  return (
    <>
        <Navbar />
        <div className="flex h-full pt-20">
            {children}
        </div>
    </>
  )
}

export default BrowseLayout