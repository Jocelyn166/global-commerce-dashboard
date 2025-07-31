import React from "react";
import styles from "./OrderTable.module.css";
import { type Order } from "../../data/mockOrders";

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Customer</th>
              <th className={styles.th}>Total</th>
              <th className={styles.th}>Region</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {orders.map((order) => {
              const statusClass = styles[order.status.toLowerCase()] || "";
              return (
                <tr key={order.id}>
                  <td className={styles.td}>{order.customer}</td>
                  <td className={styles.td}>{order.total}</td>
                  <td className={styles.td}>{order.region}</td>
                  <td className={styles.td}>{order.category}</td>
                  <td className={styles.td}>
                    <span className={`${styles.status} ${statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
