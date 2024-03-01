'use client'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

const CompletePage = (props: Props) => {
    const searchParams = useSearchParams()
 
  const data = searchParams.get('data')
    console.log('pathname',data );
    
  return (
    <div>{data}</div>
  )
}

export default CompletePage