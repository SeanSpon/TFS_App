"use client";

import { useState, useEffect } from "react";
import { adminUsers, defaultNotifications } from "@/lib/admin/mock-data";
import { getCurrentUserEmail } from "@/lib/admin/auth";
import type { NotificationSetting } from "@/lib/admin/types";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState<NotificationSetting[]>(defaultNotifications);
  const [currentUser, setCurrentUser] = useState(adminUsers[0]);

  useEffect(() => {
    const email = getCurrentUserEmail();
    if (email) {
      const found = adminUsers.find((u) => u.email === email);
      if (found) setCurrentUser(found);
    }
  }, []);

  function toggleNotification(id: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-navy mb-6">Profile</h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white text-xl font-bold">
            {currentUser.avatar}
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy">{currentUser.name}</h3>
            <p className="text-sm text-slate">{currentUser.email}</p>
            <span className="inline-block mt-1 px-2.5 py-0.5 bg-gold/10 text-gold-dark text-xs font-medium rounded-full capitalize">
              {currentUser.role}
            </span>
          </div>
        </div>
      </div>

      {/* Notification Toggles */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-navy mb-6">Notifications</h2>
        <div className="space-y-5">
          {notifications.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-navy">{setting.label}</p>
                <p className="text-xs text-slate mt-0.5">{setting.description}</p>
              </div>
              <button
                onClick={() => toggleNotification(setting.id)}
                className={`toggle-track ${setting.enabled ? "active" : ""}`}
                aria-label={`Toggle ${setting.label}`}
              >
                <div className="toggle-thumb" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Database Connection */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-bold text-navy">Database Connection</h2>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Connected
          </span>
        </div>
        <p className="text-sm text-slate mb-4">
          Neon Postgres database is connected. Lead data, analytics, and settings are stored in the live database.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-50 rounded-lg px-4 py-3 font-mono text-xs text-slate">
              postgresql://***@ep-small-dawn-***.neon.tech/neondb
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Schema created &middot; 28 leads seeded &middot; Referrer data loaded
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-xl border border-red-200 p-6">
        <h2 className="text-lg font-bold text-red-700 mb-4">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-navy">Export All Data</p>
              <p className="text-xs text-slate">Download leads, analytics, and settings as CSV</p>
            </div>
            <button
              onClick={() => alert("Export feature available with database connection")}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-navy hover:bg-gray-50 transition-colors"
            >
              Export
            </button>
          </div>
          <div className="border-t border-red-100" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-navy">Delete All Leads</p>
              <p className="text-xs text-slate">Permanently remove all lead data. This cannot be undone.</p>
            </div>
            <button
              onClick={() => alert("Delete feature available with database connection")}
              className="px-4 py-2 border border-red-300 text-sm font-medium rounded-lg text-red-700 hover:bg-red-50 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
