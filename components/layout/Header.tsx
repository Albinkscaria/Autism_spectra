"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/doctors", label: "Therapists" },
    { href: "/games", label: "Games" },
    { href: "/blog", label: "Blog" },
    { href: "/community", label: "Community" },
    { href: "/resources", label: "Resources" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-md shadow-navbar">
      <nav className="container mx-auto flex h-17.5 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/images/speelan-ai-logo.svg"
            alt="Speelans AI logo"
            width={56}
            height={56}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-semibold transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-3 py-2 relative group ${
                isActive(link.href) ? 'text-primary' : 'text-text-primary'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-transform origin-left ${
                isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
          
          {/* Auth Buttons */}
          <Link href="/login">
            <Button 
              variant="ghost"
              className="text-base font-semibold hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-3 py-2"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-button px-6 font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white shadow-lg animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-input px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive(link.href) 
                    ? 'bg-primary-50 text-primary' 
                    : 'text-text-primary hover:bg-primary-50 hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="ghost"
                  className="w-full text-base font-semibold"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-button font-semibold"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
