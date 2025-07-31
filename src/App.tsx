import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import { fetchAllOrders, type Order } from "./data/mockOrders";
import "./App.css";

const App = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(() =>
    new Date().toLocaleString()
  );

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const allOrders = await fetchAllOrders();
      setOrders(allOrders);
      setLastUpdated(new Date().toLocaleString());
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setError("Unable to load order data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeaderBar
        onRefresh={fetchData}
        lastUpdated={lastUpdated}
        isRefreshing={loading}
      />
      {error ? (
        <div className="errorBanner">{error}</div>
      ) : (
        <Dashboard orders={orders} loading={loading} />
      )}
    </>
  );
};

export default App;
