import Image from "next/image";
import styles from "./index.module.css";
export default function MvText() {
  return (
    <div className={styles.mvText}>
      <Image
        src="/mvText.png"
        alt="parabolam"
        loading="lazy"
        width={500}
        height={500}
      />
    </div>
  );
}
