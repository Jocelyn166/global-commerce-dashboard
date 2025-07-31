import React from "react";
import styles from "./RegionTabs.module.css";

type Region = "APAC" | "UK" | "US";

type Props = {
  activeRegion: Region;
  onChange: (region: Region) => void;
};

const regions: { code: Region; label: string }[] = [
  { code: "APAC", label: "🌏 APAC Region" },
  { code: "UK", label: "🇬🇧 UK Region" },
  { code: "US", label: "🇺🇸 US Region" },
];

const RegionTabs: React.FC<Props> = ({ activeRegion, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        <nav className={styles.tabNav}>
          {regions.map(({ code, label }) => (
            <button
              key={code}
              className={`${styles.tabButton} ${
                activeRegion === code ? styles.active : ""
              }`}
              onClick={() => onChange(code)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default RegionTabs;
