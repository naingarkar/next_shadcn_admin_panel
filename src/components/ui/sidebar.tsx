"use client"

import React, { useState } from 'react'
import { Nav } from './nav'
import {
    AlertCircle,
    Archive,
    ArchiveX,
    ChevronRight,
    File,
    Inbox,
    LayoutDashboard,
    MessagesSquare,
    Search,
    Send,
    ShoppingCart,
    Trash2,
    Users2,
  } from "lucide-react"
import { Button } from './button'

const Sidebar = () => {
    return (
        <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
            <Nav
                links={[
                {
                    title: "Dashboard",
                    href: "/dashboard",
                    icon: LayoutDashboard,
                    variant: "default",
                    label: "Dashboard"
                }
                ]}
            />
        </div>
    )
}

export default Sidebar