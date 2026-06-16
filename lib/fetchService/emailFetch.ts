"use server"

import emailjs from "@emailjs/nodejs";

export async function POST(params: Record<string, unknown>) {
    try {
        const result = await emailjs.send(
            process.env.SERVICE_ID!,
            process.env.TEMPLATE_ID!,
            params,
            {
                publicKey: process.env.PUBLIC_KEY!,
                privateKey: process.env.PRIVATE_KEY!,
            }
        );

        return true;
    } catch (error: any) {
        return false;
    }
}