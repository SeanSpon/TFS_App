"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/admin/auth";
import Sidebar from "@/components/admin/Sidebar";
import TopBar from "@/components/admin/TopBar";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/leads": "Lead Management",
  "/admin/analytics": "Analytics",
  "/admin/settings": "Settings",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated() && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else {
      setChecked(true);
    }
  }, [pathname, router]);

  // Login page: render without shell
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Wait until auth check completes before rendering the shell
  if (!checked) {
    return null;
  }

  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <TopBar title={title} />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
