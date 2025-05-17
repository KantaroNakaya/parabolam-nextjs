"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";
import { sendGTMEvent } from "@next/third-parties/google";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);

  const handleSubmit = () => {
    sendGTMEvent({
      event: "contact",
      value: "submit",
    });
  };

  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form action={formAction} className={styles.form} onSubmit={handleSubmit}>
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
          />
        </div>
      </div>
      <div className={styles.item}>
        <label htmlFor="company" className={styles.label}>
          会社名
        </label>
        <input
          type="text"
          id="company"
          className={styles.textfield}
          name="company"
        />
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
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="message" className={styles.label}>
          メッセージ
        </label>
        <textarea id="message" className={styles.textfield} name="message" />
      </div>
      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
