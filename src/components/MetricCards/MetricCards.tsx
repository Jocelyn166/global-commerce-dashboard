import React from "react";
import styles from "./MetricCards.module.css";
import {
  HiShoppingBag,
  HiCurrencyDollar,
  HiDocumentText,
  HiClock,
} from "react-icons/hi";

export interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  color?: "blue" | "green" | "purple" | "orange";
}

interface Props {
  metrics: Metric[];
}

const fallbackColors: Array<"blue" | "green" | "purple" | "orange"> = [
  "blue",
  "green",
  "purple",
  "orange",
];

const iconMap = {
  blue: { icon: HiShoppingBag, bg: styles.bgBlue, text: styles.textBlue },
  green: { icon: HiCurrencyDollar, bg: styles.bgGreen, text: styles.textGreen },
  purple: {
    icon: HiDocumentText,
    bg: styles.bgPurple,
    text: styles.textPurple,
  },
  orange: { icon: HiClock, bg: styles.bgOrange, text: styles.textOrange },
};

const MetricCards: React.FC<Props> = ({ metrics }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {metrics.map((metric, idx) => {
          const color =
            metric.color ?? fallbackColors[idx % fallbackColors.length];
          const entry = iconMap[color];

          if (!entry) {
            console.warn(`Invalid color: ${color}`);
            return null;
          }

          const { icon: Icon, bg, text } = entry;
          const trendClass =
            metric.trend === "up" ? styles.trendUp : styles.trendDown;

          return (
            <div key={idx} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.textStack}>
                  <p className={styles.label}>{metric.label}</p>
                  <p className={styles.value}>{metric.value}</p>
                  <p className={`${styles.change} ${trendClass}`}>
                    {metric.trend === "up" ? "↗" : "↘"} {metric.change}
                  </p>
                </div>
                <div className={`${styles.iconContainer} ${bg}`}>
                  <Icon className={`${styles.icon} ${text}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetricCards;
