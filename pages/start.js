import { useEffect, useState } from "react";
import styles from "../styles/Start.module.css";

export default function Start() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={mounted ? styles.startPage : ""}>
      <h1>Start Page</h1>
      <p>Welcome to the start page.</p>
    </div>
  );
}
