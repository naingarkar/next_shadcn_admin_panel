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
    LogOutIcon,
    MessagesSquare,
    Search,
    Send,
    ShoppingCart,
    Trash2,
    Users2,
  } from "lucide-react"
import { Button } from './button'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

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
                },
                {
                    title: "Test",
                    href: "/test",
                    icon: LayoutDashboard,
                    variant: "default",
                    label: "test"
                },
                {
                    title: "Signout",
                    href: "/signout",
                    icon: LogOutIcon,
                    variant: "default",
                    label: "signout"
                }
                ]}
            />
            {/* <TooltipProvider>
                <div
                className="group flex flex-col gap-4 py-2"
                >
                    <nav className="grid gap-1 px-2 ">
                        <div className="block md:hidden">
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Link
                                    href="#"
                                    className="h-9 w-9 ghost icon"
                                    >
                                    <LogOutIcon className="h-4 w-4" />
                                    <span className="sr-only">Signout</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="flex items-center gap-4">
                                    Signout
                                </TooltipContent>
                            </Tooltip>
                        </div>
                
                        <div className="hidden md:block">
                            <Link
                            href="#"
                            className="h-9 w-9 ghost sm"
                            >
                                <LogOutIcon className="mr-2 h-4 w-4" />
                                Signout
                            </Link>
                        </div>
                    </nav>
                </div>
            </TooltipProvider> */}
        </div>
    )
}

export default Sidebar