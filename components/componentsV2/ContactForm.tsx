"use client"
import { IMessageDto } from '@/lib/Interface/interface';
import { sendForm } from '@/lib/MailServices';
import { Button, Label, TextInput } from 'flowbite-react';
import { SendHorizontal } from 'lucide-react';
import React, { useState } from 'react'

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [messageForm, setMessageForm] = useState<IMessageDto>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, id } = e.target;
        setMessageForm((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!messageForm.name.trim() || !messageForm.email.trim() || !messageForm.subject || !messageForm.message) {
            // display error message
            alert("Form is invalid!")
        }
        else {
            // lets add functionality to connect SMTP!
            setIsLoading(true);
            try {
                let result = sendForm(messageForm);
                console.log(result)
                // add logic when result is true, display error message!
            } catch (error) {
                console.log(error); //lets add error message in the contact form for fialed to send message!
            }
            finally {
                // setMessageForm({
                //     name: "",
                //     email: "",
                //     subject: "",
                //     message: ""
                // })
                setIsLoading(false);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="grid p-8 m-5 round items-center bg-white border border-gray-200 shadow-sm flex-col gap-4">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                <div>
                    <div className="mb-2 block">
                        <Label className='font-semibold' htmlFor="name">Name</Label>
                    </div>
                    <input
                        value={messageForm.name}
                        onChange={(handleInput)}
                        className='border border-gray-300 py-3 px-4 w-full text-gray-500' id="name" type="text" placeholder='Jon Doe'
                        required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className='font-semibold' htmlFor="email">Email</Label>
                    </div>
                    <input
                        className='border border-gray-300 py-3 px-4 w-full text-gray-500' id="email" type="email"
                        value={messageForm.email}
                        onChange={handleInput}
                        placeholder='jondoe@email.com'
                        required />
                </div>
            </div>
            <div>
                <div>
                    <div className="mb-2 block">
                        <Label className='font-semibold' htmlFor="subject">Subject</Label>
                    </div>
                    <input
                        value={messageForm.subject}
                        onChange={handleInput}
                        className='border border-gray-300 py-3 px-4 w-full text-gray-500' id="subject" type="text"
                        placeholder='Project Inquiry'
                        required />
                </div>
                <div className='py-5'>
                    <div className="mb-2 block">
                        <Label className='font-semibold' htmlFor="message">Message</Label>
                    </div>
                    <textarea
                        value={messageForm.message}
                        onChange={handleInput}
                        className='border border-gray-300 py-3 px-4 w-full text-gray-500 h-40 overflow-y-auto  resize-none'
                        id="message"
                        placeholder="Enter message here!"
                        required
                    />
                </div>
            </div>
            <Button disabled={isLoading} className='place-items-center group' type="submit">Send Message <SendHorizontal className='ps-2 transition-transform duration-300 ease-in-out group-hover:translate-x-3' /> </Button>
        </form>
    );
}

export default ContactForm