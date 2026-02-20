export type LeadStatus = "new" | "contacted" | "converted" | "lost";

export interface Lead {
  id: number;
  date: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  currentSoftware: string;
  numReturns: number;
  status: LeadStatus;
  source: string;
  notes: string;
}

export interface DailyPageViews {
  date: string;
  views: number;
}

export interface DailyLeads {
  date: string;
  count: number;
}

export interface ReferrerData {
  source: string;
  percentage: number;
  color: string;
}

export interface DeviceData {
  device: string;
  percentage: number;
  color: string;
}

export interface FunnelStep {
  label: string;
  value: number;
  color: string;
}

export interface PageMetric {
  page: string;
  views: number;
  avgTime: string;
  bounceRate: number;
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: "admin" | "manager";
  avatar: string;
}

export interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}
