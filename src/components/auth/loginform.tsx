"use client"

import CardWrapper from '@/components/auth/cardwrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../../schema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useFormStatus } from 'react-dom'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        setLoading(true);
        signIn("credentials", { redirect: false })
        .then((res) => {
            if(res?.status == 200) {
                redirect("/dashboard");
            }else{
                alert("error");
            }
        });
    }

    const { pending } = useFormStatus();

    return (
        <div>
            <CardWrapper
            label="Login to your account"
            title="Login"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Register here"
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
                            name="password"
                            render={
                                ({field}) => (
                                         <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input {...field} type='password' placeholder='******'/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                )
                            }
                            />
                        </div>
                        
                        <Button type='submit' className='w-full' disabled={pending}>
                            { loading ? "Loading..." : "Login" }
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}

export default LoginForm