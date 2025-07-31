import React from "react";
import styles from "./StatCard.module.css";

interface StatCardProps {
  className?: string;
  label: string;
  value?: string;
  subValue?: string;
  labelColorClass?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  className = "",
  label,
  value,
  subValue,
  labelColorClass = "",
}) => {
  return (
    <div className={`${styles.statCard} ${className}`}>
      <p className={`${styles.statLabel} ${labelColorClass}`}>{label}</p>
      {value && <p className={styles.statValue}>{value}</p>}
      {subValue && <p className={styles.statSubValue}>{subValue}</p>}
    </div>
  );
};

export default StatCard;
