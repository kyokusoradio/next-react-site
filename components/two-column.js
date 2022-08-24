import styles from "styles/two-column.module.css"

export function TwoColumn({ children }) {
  return (
    <div className={styles.flexContainer}>
      {children}
    </div>
  )
}

export function TwoColumnMain({ children }) {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export function TwoColumnSidebar({children}) {
  <div className={styles.sidevar}>
    {children}
  </div>
}