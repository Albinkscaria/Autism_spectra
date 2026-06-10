import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const footerLinks = {
    about: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
    quickLinks: [
      { href: "/doctors", label: "Find a Specialist" },
      { href: "/games", label: "Games" },
      { href: "/blog", label: "Blog" },
      { href: "/community", label: "Community" },
    ],
    resources: [
      { href: "/resources", label: "Resource Library" },
      { href: "/faq", label: "FAQ" },
      { href: "/help", label: "Help Center" },
      { href: "/support", label: "Support Groups" },
    ],
    contact: [
      { href: "mailto:hello@speelans.ai", label: "hello@speelans.ai" },
      { href: "tel:+1234567890", label: "+1 (234) 567-890" },
      { href: "#", label: "Mon-Fri, 9am-5pm EST" },
    ],
  };

  return (
    <footer className="bg-text-primary text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/speelan-ai-logo.svg"
                alt="Speelan.ai logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <h3 className="text-2xl font-extrabold text-white">Speelans AI</h3>
            </div>
            <p className="text-base text-gray-400 leading-relaxed">
              Support, Connection & Care for the Autism Community
            </p>
            <div className="flex gap-3 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-text-primary border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-text-primary border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-text-primary border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Speelans AI. Built with care for the autism community.
          </p>
        </div>
      </div>
    </footer>
  );
}
