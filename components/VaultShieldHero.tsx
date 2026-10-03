import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightCircle,
  Zap,
  LockKeyhole,
  Fingerprint,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = ["Vault", "Plans", "Install", "News", "Help"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const VaultShieldLogo = ({
  className = "w-8 h-8",
  color = "#192837",
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    overflow="visible"
    viewBox="0 0 256 256"
    className={className}
    aria-label="VaultShield Logo"
  >
    <path
      d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z"
      fill={color}
    />
  </svg>
);

export default function VaultShieldHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden select-none font-['Inter',sans-serif] text-[#192837]"
      style={
        {
          "--font-heading": "'Helvetica Now Display Bold', sans-serif",
          "--font-body": "'Inter', sans-serif",
          "--color-text": "#192837",
          "--color-accent": "#7342E2",
          "--color-login-bg": "#F2F2EE",
        } as React.CSSProperties
      }
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
      />

      {/* Subtle Tint Overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" />

      {/* Navbar Container */}
      <header className="relative z-10 w-full">
        <nav className="max-w-[1280px] mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="VaultShield Home"
          >
            <VaultShieldLogo />
            <span
              className="text-xl font-bold tracking-tight text-[#192837]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              VaultShield
            </span>
          </a>

          {/* Center Links (Desktop only) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[#192837] opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Action Buttons (Desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#start"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#7342E2] hover:brightness-110 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Start For Free
            </a>
            <a
              href="#signin"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#192837] bg-[#F2F2EE] hover:bg-[#e8e8e4] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#192837] focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Content Section */}
      <main className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8">
        <div
          className="max-w-[560px]"
          style={{ paddingTop: "clamp(40px, 8vw, 72px)" }}
        >
          {/* Animated Heading */}
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#192837] font-bold tracking-[-0.01em] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.65rem, 5vw, 3rem)",
              lineHeight: 1.05,
            }}
          >
            <Zap
              className="inline-block w-6 h-6 text-[#192837] relative -top-[2px] align-middle mr-1.5"
              strokeWidth={2.4}
            />
            Lock Down Your Passwords{" "}
            <LockKeyhole
              className="inline-block w-6 h-6 text-[#192837] relative -top-[2px] align-middle mx-1"
              strokeWidth={2.4}
            />{" "}
            with Ironclad Security{" "}
            <Fingerprint
              className="inline-block w-6 h-6 text-[#192837] relative -top-[2px] align-middle ml-1"
              strokeWidth={2.4}
            />
          </motion.h1>

          {/* Animated Subtext */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#192837] opacity-80 mb-8 max-w-[560px]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              lineHeight: 1.65,
            }}
          >
            Zero stress, total control. VaultShield keeps you covered with
            unbreakable storage, one-tap access, and pro-grade tools for your
            non-stop world.
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-between gap-8 text-white font-semibold rounded-[50px] min-w-[210px] cursor-pointer"
              style={{
                backgroundColor: "var(--color-accent)",
                padding: "17px 24px",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                boxShadow: "0 4px 24px rgba(115, 66, 226, 0.28)",
              }}
            >
              <span>Get It Free</span>
              <ArrowRightCircle className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* Mobile Menu Sheet (AnimatePresence + Framer Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[rgba(25,40,55,0.35)] backdrop-blur-[4px]"
            />

            {/* Slide-in Sheet */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed top-0 right-0 z-50 h-[100dvh] flex flex-col justify-between p-6 bg-[#CFC8C5] shadow-[-12px_0_48px_rgba(25,40,55,0.18)]"
              style={{ width: "min(88vw, 360px)" }}
            >
              {/* Sheet Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#192837]/15">
                  <div className="flex items-center gap-2.5">
                    <VaultShieldLogo className="w-7 h-7" />
                    <span
                      className="text-lg font-bold text-[#192837]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      VaultShield
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-black/5 text-[#192837] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="flex flex-col gap-4 mt-6">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.18 + i * 0.07,
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-[#192837] py-1 hover:text-[#7342E2] transition-colors"
                    >
                      {link}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Sheet Bottom CTAs */}
              <div className="pt-6 border-t border-[#192837]/15 flex flex-col gap-3">
                <a
                  href="#start"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-[#7342E2] shadow-md hover:brightness-110 transition-all"
                >
                  Start For Free
                </a>
                <a
                  href="#signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full text-center text-sm font-semibold text-[#192837] bg-[#F2F2EE] hover:bg-[#e8e8e4] transition-all"
                >
                  Sign In
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
