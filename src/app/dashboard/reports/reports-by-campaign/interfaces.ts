export interface Campaign {
  body: string;
  date: string;
  description: string;
  id: string;
  name: string;
  status: string;
  subject: string;
  to: string[];
}

export interface CampaignStats {
  id: string;
  totalBounces: number;
  totalClicks: number;
  totalComplaints: number;
  totalDeliveries: number;
  totalDeliveryDelays: number;
  totalEmailProcesses: number;
  totalOpens: number;
  totalRejections: number;
  totalRenderingFailures: number;
  totalSends: number;
  totalSubscriptions: number;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
}
