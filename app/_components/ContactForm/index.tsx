'use client';

import { submitContactForm } from '@/app/_actions/contact';
import styles from './index.module.css';
import { sendGTMEvent } from '@next/third-parties/google';
import { useState } from 'react';

type FormState = {
    success: boolean;
    message?: string;
    error?: string;
};

export default function ContactForm() {
    const [state, setState] = useState<FormState>({
        success: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        try {
            const data = {
                name: `${formData.get('lastname')} ${formData.get('firstname')}`,
                email: formData.get('email') as string,
                message: formData.get('message') as string,
            };

            const result = await submitContactForm(data);
            setState(result);

            if (result.success) {
                sendGTMEvent({
                    event: 'contact',
                    value: 'submit',
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (state.success) {
        return (
            <p className={styles.success}>
                お問い合わせいただき、ありがとうございます。
                <br />
                内容確認後、担当者より通常３営業日以内に連絡いたします。
                <br />
                今しばらくお待ちください。
            </p>
        );
    }

    if (isLoading) {
        return <div className={styles.loader}>Loading...</div>;
    }

    return (
        <>
            <p className={styles.text}>
                ご質問やご相談は、下記のフォームをご利用ください。
                <br />
                内容確認後、担当者より通常３営業日以内に連絡いたします。
            </p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(new FormData(e.currentTarget));
                }}
                className={styles.form}
            >
                <div className={styles.horizontal}>
                    <div className={styles.item}>
                        <label htmlFor="lastname" className={styles.label}>
                            姓
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            className={styles.textfield}
                            name="lastname"
                            required
                        />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="firstname" className={styles.label}>
                            名
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            className={styles.textfield}
                            name="firstname"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item}>
                    <label htmlFor="email" className={styles.label}>
                        メールアドレス
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={styles.textfield}
                        name="email"
                        required
                    />
                </div>
                <div className={styles.item}>
                    <label htmlFor="message" className={styles.label}>
                        メッセージ
                    </label>
                    <textarea
                        id="message"
                        className={styles.textfield}
                        name="message"
                        required
                    />
                </div>
                <div className={styles.actions}>
                    {state.error && (
                        <p className={styles.error}>{state.error}</p>
                    )}
                    <input
                        type="submit"
                        value="送信する"
                        className={styles.button}
                    />
                </div>
            </form>
        </>
    );
}
