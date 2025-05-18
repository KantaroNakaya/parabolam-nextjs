import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  );
}
