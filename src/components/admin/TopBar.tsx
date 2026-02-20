"use client";

import { getCurrentUserEmail } from "@/lib/admin/auth";
import { adminUsers } from "@/lib/admin/mock-data";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  const email = getCurrentUserEmail();
  const user = adminUsers.find((u) => u.email === email) ?? adminUsers[0];

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      {/* Left side: page title */}
      <h1 className="text-xl font-bold text-navy">{title}</h1>

      {/* Right side: user info */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-navy">{user.name}</p>
          <span className="text-xs font-medium text-gold capitalize">
            {user.role}
          </span>
        </div>
        <div className="w-9 h-9 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
          {user.avatar}
        </div>
      </div>
    </header>
  );
}
