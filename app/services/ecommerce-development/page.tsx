import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "E-Commerce Development Services",
  description:
    "Nexus-Tech Solutions builds high-performing online stores and custom commerce experiences — designed for customer experience, conversion and scale.",
  alternates: { canonical: "/services/ecommerce-development/" },
};

const OFFERINGS = [
  { title: "Shopify Stores", description: "Custom Shopify storefronts built to convert." },
  { title: "WooCommerce Stores", description: "Flexible WordPress-based commerce." },
  { title: "Custom Commerce", description: "Bespoke storefronts when platforms aren't enough." },
  { title: "Product Catalogs", description: "Catalogs designed for browsing and discovery." },
  { title: "Payment Integrations", description: "Secure checkout with the providers you trust." },
  { title: "Inventory Integrations", description: "Stock, orders and fulfillment in sync." },
  { title: "Custom Checkout", description: "Checkout flows tuned to reduce drop-off." },
  { title: "Store Optimization", description: "Speed and conversion improvements for existing stores." },
];

export default function EcommerceDevelopmentPage() {
  return (
    <ServicePage
      h1="E-Commerce Experiences Built to Sell."
      intro="More than an online store — high-performing commerce built around customer experience, conversion, performance and scalability."
      offerings={OFFERINGS}
    />
  );
}
