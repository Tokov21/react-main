import React from "react";

import styles from "./Button.module.sass";

export default function Button({ text, ...props }) {
  return (
    <button {...props} className={styles.btn}>
      {text}
    </button>
  );
}
