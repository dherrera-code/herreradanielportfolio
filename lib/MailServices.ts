import { IMessageDto } from './Interface/interface';
import { POST } from './fetchService/emailFetch';

export const sendForm = async ({ name, email, subject, message }: IMessageDto) => {
    const params: Record<string, unknown> = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    try {
        const response = await POST(params)
        console.log(response)
        return response;
    }
    catch (error) {
        console.log('FAILED...', error)
        return false;
    }
}