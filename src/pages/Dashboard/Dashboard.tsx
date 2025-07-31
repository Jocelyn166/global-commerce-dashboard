import React, { useEffect, useState } from "react";
import OrderTable from "../../components/OrderTable/OrderTable";
import MetricCards from "../../components/MetricCards/MetricCards";
import RegionTabs from "../../components/RegionTabs/RegionTabs";
import OrderTrendChart from "../../components/OrderTrendChart/OrderTrendChart";
import StatCard from "../../components/StatCard/StatCard";
import styles from "./Dashboard.module.css";
import statCardStyles from "../../components/StatCard/StatCard.module.css";
import type { Order } from "../../data/mockOrders";
import type { Metric } from "../../components/MetricCards/MetricCards";

type DashboardProps = {
  orders: Order[];
  loading: boolean;
};

const regions: Order["region"][] = ["APAC", "UK", "US"];
const ROTATION_INTERVAL = 5000;

const Dashboard: React.FC<DashboardProps> = ({ orders, loading }) => {
  const [activeRegion, setActiveRegion] = useState<Order["region"]>("APAC");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => {
        const currentIndex = regions.indexOf(prev);
        const nextIndex = (currentIndex + 1) % regions.length;
        return regions[nextIndex];
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce(
    (sum, o) => sum + parseFloat(o.total.replace("$", "")),
    0
  );
  const pendingOrders = orders.filter((o) => o.status === "Pending").length;
  const avgOrderValue = totalRevenue / totalOrders;

  const metrics: Metric[] = [
    {
      label: "Total Orders",
      value: totalOrders.toLocaleString(),
      change: "+12.5% vs last week",
      trend: "up",
    },
    {
      label: "Total Revenue",
      value: `$${totalRevenue.toFixed(2)}`,
      change: "+8.3% vs last week",
      trend: "up",
    },
    {
      label: "Avg Order Value",
      value: `$${avgOrderValue.toFixed(2)}`,
      change: "-2.1% vs last week",
      trend: "down",
    },
    {
      label: "Pending Orders",
      value: pendingOrders.toString(),
      change: "+5.2% vs yesterday",
      trend: "up",
    },
  ];

  const regionOrders = orders.filter((o) => o.region === activeRegion);
  const regionRevenue = regionOrders.reduce(
    (sum, o) => sum + parseFloat(o.total.replace("$", "")),
    0
  );

  const categorySales: Record<string, number> = {};
  regionOrders.forEach((order) => {
    const total = parseFloat(order.total.replace("$", ""));
    categorySales[order.category] =
      (categorySales[order.category] || 0) + total;
  });
  const topCategory =
    Object.entries(categorySales).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  const orderTrendData = [20, 35, 40, 55, 70, 90].map(
    (x) => x + Math.floor(Math.random() * 20)
  );

  return (
    <main className={styles.container}>
      <section className={styles.metricsSection}>
        <MetricCards metrics={metrics} />
      </section>

      <section className={styles.regionOverviewSection}>
        <RegionTabs activeRegion={activeRegion} onChange={setActiveRegion} />
        <div className={styles.regions}>
          <div className={styles.grid}>
            <div className={styles.chartSection}>
              <h3 className={styles.sectionTitle}>Orders Over Time</h3>
              <OrderTrendChart
                region={activeRegion}
                dataPoints={orderTrendData}
              />
            </div>

            <div className={styles.statsSection}>
              <h3 className={styles.sectionTitle}>Regional Stats</h3>
              <div className={styles.statsList}>
                <StatCard
                  className={statCardStyles.blueCard}
                  label="Total Orders"
                  value={regionOrders.length.toLocaleString()}
                  labelColorClass={statCardStyles.textBlue}
                />
                <StatCard
                  className={statCardStyles.greenCard}
                  label="Revenue"
                  value={`$${regionRevenue.toFixed(0)}`}
                  labelColorClass={statCardStyles.textGreen}
                />
                <StatCard
                  className={statCardStyles.purpleCard}
                  label="Top Category"
                  subValue={topCategory}
                  labelColorClass={statCardStyles.textPurple}
                />
              </div>
            </div>
          </div>
          <div className={styles.orders}>
            <h2 className={styles.sectionTitle}>
              Recent Orders ({activeRegion})
            </h2>
            <OrderTable orders={regionOrders} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
