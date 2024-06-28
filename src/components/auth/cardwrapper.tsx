"use client"

import React, { ReactNode } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import AuthHeader from './authheader'
import BackButton from './backbutton'

interface CardWrapperProps {
    label: string
    title: string
    backButtonHref: string
    backButtonLabel: string
    children: ReactNode
}

const CardWrapper = ({label, title, backButtonHref, backButtonLabel, children}: CardWrapperProps) => {
  return (
    <Card className='shadow-md'>
        <CardHeader>
            <AuthHeader label={label} title={title}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref}/>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper