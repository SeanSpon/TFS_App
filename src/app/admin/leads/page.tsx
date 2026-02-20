"use client";

import { useState } from "react";
import { leads } from "@/lib/admin/mock-data";
import LeadsTable from "@/components/admin/LeadsTable";
import type { LeadStatus } from "@/lib/admin/types";

const tabs: { label: string; value: LeadStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "New", value: "new" },
  { label: "Contacted", value: "contacted" },
  { label: "Converted", value: "converted" },
  { label: "Lost", value: "lost" },
];

export default function LeadsPage() {
  const [activeTab, setActiveTab] = useState<LeadStatus | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = leads.filter((lead) => {
    const matchesTab = activeTab === "all" || lead.status === activeTab;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      lead.name.toLowerCase().includes(q) ||
      lead.company.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      lead.city.toLowerCase().includes(q) ||
      lead.state.toLowerCase().includes(q);
    return matchesTab && matchesSearch;
  });

  const statusCounts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    converted: leads.filter((l) => l.status === "converted").length,
    lost: leads.filter((l) => l.status === "lost").length,
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Status Tabs */}
          <div className="flex gap-1 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.value
                    ? "bg-navy text-white"
                    : "text-slate hover:bg-gray-100"
                }`}
              >
                {tab.label}
                <span className="ml-1.5 text-xs opacity-70">
                  {statusCounts[tab.value]}
                </span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="sm:ml-auto relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-input pl-9 w-full sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <LeadsTable leads={filtered} />
      </div>
    </div>
  );
}
