"use client"
import { IMessageDto } from '@/lib/Interface/interface';
import { Button, Label, TextInput } from 'flowbite-react';
import { SendHorizontal } from 'lucide-react';
import { div } from 'motion/react-client'
import React, { useState } from 'react'

const ContactForm = () => {
    const [messageForm, setMessageForm] = useState<IMessageDto>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, id } = e.target;
        console.log(id + " : " + value)
        setMessageForm((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!messageForm.name.trim() || !messageForm.email.trim() || !messageForm.subject || !messageForm.message) {
            // display error message
            alert("Form is invalid!")
            console.log(messageForm)
        }
        else {
            // lets add functionality to connect SMTP!
            console.log("Form is valid")
            setMessageForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="grid p-8 m-5 round items-center bg-white border border-gray-200 shadow-sm flex-col gap-4">
            <div className='grid grid-cols-2 gap-6'>

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
                <div className=' py-5'>
                    <div className="mb-2 block">
                        <Label className='font-semibold' htmlFor="message">Message</Label>
                    </div>
                    <textarea 
                    value={messageForm.message}
                    onChange={handleInput}
                    className='border border-gray-300 py-3 px-4 w-full text-gray-500 h-35 flex overflow-y-auto justify-start items-start text-left align-top' 
                    id="message" 
                    placeholder="Enter message here!" 
                    required 
                    />
                </div>
            </div>
            <Button className='place-items-center' type="submit">Send Message <SendHorizontal className='ps-2 transition-transform duration-300 ease-in-out hover:translate-x-3' /> </Button>
        </form>
    );
}

export default ContactForm