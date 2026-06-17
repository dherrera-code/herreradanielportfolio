import { IMessageDto } from './Interface/interface';
import emailjs from "@emailjs/browser";

export const sendForm = async ({ name, email, subject, message }: IMessageDto) => {
    const params: Record<string, unknown> = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    try {
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            params,
            process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        )
        if(response.status == 200)
            return true;
        return true;
    }
    catch (error) {
        console.log('FAILED...', error)
        return false;
    }
}