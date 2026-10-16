import Link from "next/link";

const SERVICE_LINKS = [
  { href: "/services/web-development/", label: "Web Development" },
  { href: "/services/software-development/", label: "Software Development" },
  { href: "/services/mobile-app-development/", label: "Mobile App Development" },
  { href: "/services/ecommerce-development/", label: "E-Commerce Development" },
  { href: "/services/ai-solutions/", label: "AI Solutions" },
];

const NAV_LINKS = [
  { href: "/work/", label: "Work" },
  { href: "/services/", label: "Services" },
  { href: "/company/", label: "Company" },
  { href: "/contact/", label: "Contact" },
];

export const WHATSAPP_URL =
  "https://wa.me/923214696040?text=Hi%20Nexus-Tech%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Nexus-Tech Solutions — home">
              <span className="brand-mark" aria-hidden="true">
                N
              </span>
              <span className="brand-word">NEXUS&#8209;TECH</span>
            </Link>
            <p>
              Websites, software, mobile applications, e-commerce and AI
              solutions built for modern businesses.
            </p>
            <p className="microcopy" style={{ marginTop: "1rem" }}>
              Lahore, Pakistan · Serving Clients Worldwide
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h3>Navigation</h3>
            <ul>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Services">
            <h3>Services</h3>
            <ul>
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:info@globalnexus.tech">info@globalnexus.tech</a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mbj069"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Follow</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/global-nexus-tech-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Nexus-Tech-Solutions/61595253579736/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nexus_tech._.solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/NexusTechh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Nexus-Tech Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
