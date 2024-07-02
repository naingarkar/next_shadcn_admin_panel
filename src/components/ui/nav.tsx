"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { usePathname } from "next/navigation"

interface NavProps {
  links: {
    title: string
    href: string
    label: string
    icon: LucideIcon
    variant: "default" | "ghost"
  }[]
}

export function Nav({ links }: NavProps) {

    const pathName = usePathname();
  return (
    <TooltipProvider>
        <div
        className="group flex flex-col gap-4 py-2"
        >
            <nav className="grid gap-1 px-2 ">
                {links.map((link, index) =>
                    <div key={index}>
                        <div className="block md:hidden">
                            <Tooltip key={index} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Link
                                    href={link.href}
                                    className={cn(
                                        buttonVariants({ variant: link.href === pathName ? "default" : "ghost", size: "icon" }),
                                        "h-9 w-9",
                                        link.variant === "default" &&
                                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                                    )}
                                    >
                                    <link.icon className="h-4 w-4" />
                                    <span className="sr-only">{link.title}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="flex items-center gap-4">
                                    {link.title}
                                
                                </TooltipContent>
                            </Tooltip>
                        </div>
                
                        <div className="hidden md:block">
                            <Link
                            key={index}
                            href={link.href}
                            className={cn(
                                buttonVariants({  variant: link.href === pathName ? "default" : "ghost", size: "sm" }),
                                link.variant === "default" &&
                                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                                "justify-start"
                            )}
                            >
                            <link.icon className="mr-2 h-4 w-4" />
                            {link.title}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    </TooltipProvider>
  )
}
