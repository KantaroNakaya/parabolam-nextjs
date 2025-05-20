import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";
import PageTitle from "@/app/_components/PageTitle";

export default function Page() {
  return (
    <div className={styles.container}>
      <PageTitle title="CONTACT" />
      <ContactForm />
    </div>
  );
}
