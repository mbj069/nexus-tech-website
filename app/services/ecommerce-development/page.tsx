import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "E-Commerce Development Services",
  description:
    "Nexus-Tech Solutions builds high-performing online stores and custom commerce experiences \u2014 designed for customer experience, conversion and scale.",
  alternates: { canonical: "/services/ecommerce-development/" },
};

export default function EcommerceDevelopmentPage() {
  return (
    <ServicePage
      h1="E-Commerce Experiences Built to Sell."
      intro="More than an online store \u2014 high-performing commerce built around customer experience, conversion, performance and scalability."
      problemHeading="More Than an Online Store."
      problemCopy={[
        "Putting products online is easy. Selling is hard. A store that loads slowly, confuses at checkout, or looks untrustworthy leaks revenue at every step.",
        "E-commerce is conversion engineering: speed, clarity, trust signals, and a checkout that doesn\u2019t fight the customer.",
      ]}
      offerings={[
        { title: "Shopify Stores", description: "Custom Shopify storefronts built to convert." },
        { title: "WooCommerce Stores", description: "Flexible WordPress-based commerce you fully own." },
        { title: "Custom Commerce", description: "Bespoke storefronts when platforms box you in." },
        { title: "Product Catalogs", description: "Catalogs designed for browsing and discovery." },
        { title: "Payment Integrations", description: "Secure checkout with the providers you trust." },
        { title: "Inventory Integrations", description: "Stock, orders and fulfillment in sync." },
        { title: "Custom Checkout", description: "Checkout flows tuned to reduce drop-off." },
        { title: "Store Optimization", description: "Speed and conversion improvements for existing stores." },
      ]}
      capabilitiesHeading="Our E-Commerce Capabilities"
      capabilities={[
        { title: "Shopify Development", description: "Custom themes and setups on the world\u2019s most popular commerce platform." },
        { title: "WooCommerce Development", description: "Full-ownership commerce on WordPress \u2014 no platform rent on your revenue." },
        { title: "Custom Storefronts", description: "Bespoke builds when your catalog or workflow outgrows platforms." },
        { title: "Payment Setup", description: "Cards, wallets and cash-on-delivery where relevant \u2014 the merchant accounts stay yours." },
        { title: "Checkout Optimization", description: "Fewer steps, fewer doubts, fewer abandoned carts." },
        { title: "Migrations & Speed Work", description: "Move platforms without losing rankings, customers or order history." },
      ]}
      faqs={[
        {
          q: "Shopify, WooCommerce, or custom \u2014 which is right for us?",
          a: "It depends on catalog size, budget and how much control you need. We recommend after understanding your business \u2014 never before.",
        },
        {
          q: "Can you migrate my existing store?",
          a: "Yes: products, customers, orders and SEO redirects \u2014 so you don\u2019t lose rankings in the move.",
        },
        {
          q: "How do payments work?",
          a: "We integrate trusted payment providers; the merchant accounts are opened in your name and stay yours.",
        },
        {
          q: "Will my store be fast on phones?",
          a: "It\u2019s built mobile-first \u2014 most shopping happens on phones, so that\u2019s where performance matters most.",
        },
      ]}
    />
  );
}
