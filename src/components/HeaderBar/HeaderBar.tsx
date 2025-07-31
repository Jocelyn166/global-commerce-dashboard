import React from "react";
import styles from "./HeaderBar.module.css";

type HeaderBarProps = {
  onRefresh: () => void;
  lastUpdated: string;
  isRefreshing: boolean;
};

const HeaderBar: React.FC<HeaderBarProps> = ({
  onRefresh,
  lastUpdated,
  isRefreshing,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <h1 className={styles.title}>Global Commerce Dashboard</h1>
            <p className={styles.subtitle}>APAC • UK • US Operations</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.updated}>
            <p className={styles.updatedLabel}>Last Updated</p>
            <p className={styles.updatedTime}>{lastUpdated}</p>
          </div>
          <button
            className={styles.refreshBtn}
            onClick={onRefresh}
            disabled={isRefreshing}
          >
            {isRefreshing && <span className={styles.spinner} />}
            {isRefreshing ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
