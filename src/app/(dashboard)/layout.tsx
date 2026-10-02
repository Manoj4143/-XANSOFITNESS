"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Calendar,
  Layers,
  Activity,
  Settings,
  LogOut,
  Sparkles,
  Menu,
  X,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WellnessConcierge } from "@/components/ai/WellnessConcierge";

const SIDEBAR_ITEMS = [
  { name: "Sanctuary Overview", href: "/dashboard", icon: Compass },
  { name: "Live Schedule", href: "/dashboard/schedule", icon: Calendar },
  { name: "My Programs", href: "/dashboard/programs", icon: Layers },
  { name: "Breath & Biometrics", href: "/dashboard/biometrics", icon: Activity },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-surface border-b border-border">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-text-main">
          Xanso<span className="text-primary font-serif">.</span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 rounded-lg text-text-main hover:bg-surfaceVariant"
        >
          {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-border p-6 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="space-y-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-text-main">
              Xanso<span className="text-primary font-serif">.</span>
            </span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              Member
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1.5 font-sans">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href === "/dashboard" && pathname === "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-surface text-primary shadow-soft font-semibold"
                      : "text-text-muted hover:text-text-main hover:bg-surface/50"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-text-muted")} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Member Profile Card & Logout */}
        <div className="pt-6 border-t border-border space-y-4 font-sans">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display font-semibold">
              SA
            </div>
            <div className="truncate">
              <div className="text-sm font-semibold text-text-main truncate">
                Sophia Aris
              </div>
              <div className="text-xs text-text-muted truncate">
                1:1 Sanctuary Tier
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-text-muted hover:text-primary transition-colors pt-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Return to Sanctuary Landing</span>
          </Link>
        </div>
      </aside>

      {/* Main Dashboard Canvas */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Persistent Global Wellness Concierge */}
      <WellnessConcierge />
    </div>
  );
}
