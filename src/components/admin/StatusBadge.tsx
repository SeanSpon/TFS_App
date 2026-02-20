"use client";

interface StatusBadgeProps {
  status: "new" | "contacted" | "converted" | "lost";
}

const statusStyles: Record<StatusBadgeProps["status"], string> = {
  new: "bg-blue-50 text-blue-700",
  contacted: "bg-amber-50 text-amber-700",
  converted: "bg-green-50 text-green-700",
  lost: "bg-red-50 text-red-700",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
