import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();
        console.log('Received form data:', { name, email, message });

        // バリデーション
        if (!name || !email || !message) {
            console.log('Validation failed: missing required fields');
            return NextResponse.json(
                { error: '必須項目が入力されていません' },
                { status: 400 }
            );
        }

        // 環境変数のチェック
        const requiredEnvVars = {
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_PORT: process.env.SMTP_PORT,
            SMTP_USER: process.env.SMTP_USER,
            SMTP_PASSWORD: process.env.SMTP_PASSWORD,
            SMTP_FROM: process.env.SMTP_FROM,
            CONTACT_EMAIL: process.env.CONTACT_EMAIL,
        };

        const missingEnvVars = Object.entries(requiredEnvVars)
            .filter(([_, value]) => !value)
            .map(([key]) => key);

        if (missingEnvVars.length > 0) {
            console.error('Missing environment variables:', missingEnvVars);
            throw new Error(
                `Missing environment variables: ${missingEnvVars.join(', ')}`
            );
        }

        console.log('Creating transporter with config:', {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            // password is intentionally omitted for security
        });

        // メール送信の設定
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // TLSを使用する場合はfalse
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false, // 開発環境での証明書エラーを無視
            },
        });

        // メールの内容
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.CONTACT_EMAIL,
            subject: `【問い合わせ】${name}様より`,
            text: `
Parabolam宛てに${name}様よりお問い合わせがありました。
メールアドレス: ${email}
メッセージ:
            ${message}
            `,
        };

        console.log('Attempting to send email to:', process.env.CONTACT_EMAIL);

        // メール送信
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        return NextResponse.json(
            { message: 'メッセージが送信されました' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Detailed error in contact API:', error);

        // エラーの種類に応じて適切なメッセージを返す
        if (error instanceof Error) {
            if (error.message.includes('SMTP')) {
                return NextResponse.json(
                    { error: 'メールサーバーへの接続に失敗しました' },
                    { status: 500 }
                );
            }
            if (error.message.includes('Missing environment variables')) {
                return NextResponse.json(
                    { error: '環境変数が正しく設定されていません' },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json(
            { error: 'メッセージの送信に失敗しました' },
            { status: 500 }
        );
    }
}
