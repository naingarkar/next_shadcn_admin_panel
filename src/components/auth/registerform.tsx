"use client"

import CardWrapper from '@/components/auth/cardwrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RegisterSchema } from '../../../schema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useFormStatus } from 'react-dom'

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
        console.log(data);
        setLoading(true);
    }

    const { pending } = useFormStatus();
 
    return (
        <div>
            <CardWrapper
            label="Create an account"
            title="Register"
            backButtonHref="/auth/login"
            backButtonLabel="Already have an account? Login here"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='space-y-4'>
                            <FormField
                            control={form.control}
                            name="email"
                            render={
                                ({field}) => (
                                         <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} type='email' placeholder='johndoe@gmail.com'/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                )
                            }
                            />
                        </div>
                        <div className='space-y-4'>
                            <FormField
                            control={form.control}
                            name="name"
                            render={
                                ({field}) => (
                                         <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='johndoe'/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                )
                            }
                            />
                        </div>
                        <div className='space-y-4'>
                            <FormField
                            control={form.control}
                            name="password"
                            render={
                                ({field}) => (
                                         <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='******'/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                )
                            }
                            />
                        </div>
                        <div className='space-y-4'>
                            <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={
                                ({field}) => (
                                         <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='******'/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                )
                            }
                            />
                        </div>
                        <Button type='submit' className='w-full' disabled={pending}>
                            { loading ? "Loading..." : "Register" }
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}

export default RegisterForm