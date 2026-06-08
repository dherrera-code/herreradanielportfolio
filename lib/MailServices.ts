
import emailjs from '@emailjs/browser';
import { IMessageDto } from './Interface/interface';

export const sendForm = (formData: IMessageDto) => {
    const params: Record<string, unknown> = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
    }
    try {
        emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, params, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
            .then(
                (response) => {
                    console.log('SUCESS!', response.status, response.text);
                }, (error) => {
                    console.log('FAILED...', error)
                    return false;
                }
            )
        return true;
    }
    catch (error) {
        console.log('FAILED...', error)
        return false;
    }
}