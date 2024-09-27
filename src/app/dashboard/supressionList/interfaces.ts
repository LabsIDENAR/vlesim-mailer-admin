export interface SuppressionListItem {
  id: string;
  email: string;
  isSubscribed: boolean;
}

export interface ApiResponse {
  statusCode: number;
  message: string;
  data: SuppressionListItem[];
  total: number;
}
