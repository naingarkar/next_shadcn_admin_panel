import Sidebar from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

const AuthenticatedRootLayout = ({children}: Readonly<{children: ReactNode}>) => {
  return (
    <div className=' min-h-screen w-full bg-white text-black flex'>
        {/* sidebar */}
        <Sidebar/>
        {/* main page */}

        <div className="p-8">{children}</div>
    </div>
  )
}

export default AuthenticatedRootLayout