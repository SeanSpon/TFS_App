"use client";

import { Fragment, useState } from "react";
import type { Lead } from "@/lib/admin/types";
import StatusBadge from "@/components/admin/StatusBadge";

interface LeadsTableProps {
  leads: Lead[];
  compact?: boolean;
  limit?: number;
}

export default function LeadsTable({
  leads,
  compact = false,
  limit,
}: LeadsTableProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const displayLeads = limit ? leads.slice(0, limit) : leads;
  const columnCount = compact ? 4 : 7;

  function toggleRow(id: number) {
    if (compact) return;
    setExpandedId(expandedId === id ? null : id);
  }

  if (displayLeads.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
        <svg
          className="mx-auto mb-3 text-gray-300"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <p className="text-sm text-slate font-medium">No leads found</p>
        <p className="text-xs text-slate-light mt-1">
          Leads will appear here once submitted
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left text-xs text-slate uppercase tracking-wider font-medium px-4 py-3">
                Date
              </th>
              <th className="text-left text-xs text-slate uppercase tracking-wider font-medium px-4 py-3">
                Name
              </th>
              <th className="text-left text-xs text-slate uppercase tracking-wider font-medium px-4 py-3">
                Company
              </th>
              {!compact && (
                <>
                  <th className="text-left text-xs text-slate uppercase tracking-wider font-medium px-4 py-3">
                    Email
                  </th>
                  <th className="text-left text-xs text-slate uppercase tracking-wider font-medium px-4 py-3">
                    Phone
                  </th>
                </>
              )}
              <th className="text-left text-xs text-slate uppercase tracking-wider font-medium px-4 py-3">
                Status
              </th>
              {!compact && (
                <th className="text-left text-xs text-slate uppercase tracking-wider font-medium px-4 py-3">
                  Source
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {displayLeads.map((lead) => {
              const isExpanded = expandedId === lead.id;

              return (
                <Fragment key={lead.id}>
                  {/* Main row */}
                  <tr
                    className={`admin-table-row border-b border-gray-50 text-sm ${
                      !compact ? "cursor-pointer" : ""
                    } ${isExpanded ? "bg-gray-50" : ""}`}
                    onClick={() => toggleRow(lead.id)}
                  >
                    <td className="px-4 py-3 text-slate whitespace-nowrap">
                      {lead.date}
                    </td>
                    <td className="px-4 py-3 font-medium text-navy whitespace-nowrap">
                      {lead.name}
                    </td>
                    <td className="px-4 py-3 text-slate whitespace-nowrap">
                      {lead.company}
                    </td>
                    {!compact && (
                      <>
                        <td className="px-4 py-3 text-slate whitespace-nowrap">
                          {lead.email}
                        </td>
                        <td className="px-4 py-3 text-slate whitespace-nowrap">
                          {lead.phone}
                        </td>
                      </>
                    )}
                    <td className="px-4 py-3">
                      <StatusBadge status={lead.status} />
                    </td>
                    {!compact && (
                      <td className="px-4 py-3 text-slate whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {lead.source}
                          <svg
                            className={`w-4 h-4 text-slate-light transition-transform duration-200 ml-auto ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 6l4 4 4-4" />
                          </svg>
                        </div>
                      </td>
                    )}
                  </tr>

                  {/* Expanded detail panel */}
                  {isExpanded && !compact && (
                    <tr className="border-b border-gray-100">
                      <td colSpan={columnCount} className="bg-gray-50 px-4 py-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-xs text-slate uppercase tracking-wider font-medium block mb-1">
                              Email
                            </span>
                            <a
                              href={`mailto:${lead.email}`}
                              className="text-navy hover:text-gold transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {lead.email}
                            </a>
                          </div>
                          <div>
                            <span className="text-xs text-slate uppercase tracking-wider font-medium block mb-1">
                              Phone
                            </span>
                            <a
                              href={`tel:${lead.phone}`}
                              className="text-navy hover:text-gold transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {lead.phone}
                            </a>
                          </div>
                          <div>
                            <span className="text-xs text-slate uppercase tracking-wider font-medium block mb-1">
                              Location
                            </span>
                            <span className="text-navy">
                              {lead.city}, {lead.state}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-slate uppercase tracking-wider font-medium block mb-1">
                              Current Software
                            </span>
                            <span className="text-navy">
                              {lead.currentSoftware || "N/A"}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-slate uppercase tracking-wider font-medium block mb-1">
                              Returns
                            </span>
                            <span className="text-navy">
                              {lead.numReturns > 0
                                ? lead.numReturns.toLocaleString()
                                : "N/A"}
                            </span>
                          </div>
                          <div className="md:col-span-3">
                            <span className="text-xs text-slate uppercase tracking-wider font-medium block mb-1">
                              Notes
                            </span>
                            <span className="text-navy">
                              {lead.notes || "No notes"}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
