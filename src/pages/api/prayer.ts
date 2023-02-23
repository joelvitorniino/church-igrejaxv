import { config } from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

config();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const nodeMailer = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER as string,
            pass: process.env.GMAIL_PASS as string
        },
        secure: true
    });

    nodeMailer.sendMail({
        from: req.body.name,
        to: process.env.EMAIL_CHURCH,
        subject: `Pedido de Oração de: ${req.body.name}`,
        text: `
        Nome: ${req.body.name}
        Motivo da Oração: ${req.body.request_prayer}
        `
    })
        .then(() => {
            return res.status(200).json({ data: "Email sent!" })
        })
        .catch((e) => {
            return res.status(500).json({ data: "Email not sent" });
        })
}