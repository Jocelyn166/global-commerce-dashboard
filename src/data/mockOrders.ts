import { faker } from "@faker-js/faker";

export interface Order {
  id: string;
  customer: string;
  total: string;
  status: "Pending" | "Shipped" | "Delivered" | "Canceled";
  region: "APAC" | "UK" | "US";
  date: string;
  category:
    | "Sofas"
    | "Living"
    | "Dining"
    | "Bedroom"
    | "Outdoor"
    | "Rugs"
    | "Lighting";
  paymentMethod: "Credit Card" | "PayPal" | "Zip now, pay later";
  details: string;
}

const categories: Order["category"][] = [
  "Sofas",
  "Living",
  "Dining",
  "Bedroom",
  "Outdoor",
  "Rugs",
  "Lighting",
];
const paymentMethods: Order["paymentMethod"][] = [
  "Credit Card",
  "PayPal",
  "Zip now, pay later",
];
const statuses: Order["status"][] = [
  "Pending",
  "Shipped",
  "Delivered",
  "Canceled",
];

const generateItemDetails = () => {
  return `Jasper Modular Sofa with Chaise
2860mm W | Package 13
Qty1
$${faker.commerce.price({ min: 2000, max: 6000 })}
Remove
View Details
Baxter
Baxter Granite
Seat Cushion
Memory Foam
Timber Veneer Shelf 1: 104cm Natural Oak - Light & Charge Shelf
Timber Veneer Shelf 2: 78cm Smoked Oak - Light & Charge Shelf
Legs Standard Black Fixed Leg
KingGuard® Fabric Protection Yes, add KingGuard® Fabric Protection`;
};

const generateOrders = async (
  region: "APAC" | "UK" | "US",
  count: number
): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: count }, () => ({
          id: faker.string.uuid(),
          customer: faker.person.fullName(),
          total: `$${faker.commerce.price({ min: 50, max: 5000 })}`,
          status: faker.helpers.arrayElement(statuses),
          region,
          date: faker.date.recent({ days: 10 }).toLocaleDateString(),
          category: faker.helpers.arrayElement(categories),
          paymentMethod: faker.helpers.arrayElement(paymentMethods),
          details: generateItemDetails(),
        }))
      );
    }, faker.number.int({ min: 300, max: 1000 })); // simulate network delay
  });
};

export const fetchAllOrders = async (): Promise<Order[]> => {
  const [apacOrders, ukOrders, usOrders] = await Promise.all([
    generateOrders("APAC", 3),
    generateOrders("UK", 5),
    generateOrders("US", 8),
  ]);
  return [...apacOrders, ...ukOrders, ...usOrders];
};

// test for fetchData fails
// export const fetchAllOrders = async (): Promise<Order[]> => {
//     throw new Error("Simulated network error");
//   };
