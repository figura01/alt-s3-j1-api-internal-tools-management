import type { Department, ToolStatus } from './tool.enums';

export type ToolWithCategory = {
  id: number;
  name: string;
  description: string;
  vendor: string;
  websiteUrl: string | null;
  monthlyCost: unknown;
  ownerDepartment: Department;
  status: ToolStatus;
  activeUsersCount: number;
  createdAt: Date;
  updatedAt: Date;

  category: {
    id: number;
    name: string;
  };
};

export type ToolWithDetails = ToolWithCategory & {
  usage_logs: {
    id: number;
    user_id: number;
    tool_id: number;
    session_date: Date;
    usage_minutes: number | null;
    actions_count: number | null;
    created_at: Date | null;
  }[];
};

export type AppliedFilters = {
  department?: Department;
  status?: ToolStatus;
  min_cost?: number;
  max_cost?: number;
  category?: string;
};

export type SortField = 'name' | 'monthly_cost' | 'created_at';

export type SortOrder = 'asc' | 'desc';

export type ToolOrderBy = {
  name?: SortOrder;
  monthlyCost?: SortOrder;
  createdAt?: SortOrder;
};

export type ToolsListResponse = {
  data: {
    id: number;
    name: string;
    description: string;
    vendor: string;
    category: string;
    monthly_cost: number;
    owner_department: Department;
    status: ToolStatus;
    website_url: string | null;
    active_users_count: number;
    created_at: Date;
  }[];

  total: number;
  filtered: number;
  page: number;
  limit: number;

  filters_applied: AppliedFilters;
};

export type ToolDetailResponse = {
  id: number;
  name: string;
  description: string;
  vendor: string;
  website_url: string | null;
  category: string;
  monthly_cost: number;
  owner_department: Department;
  status: ToolStatus;
  active_users_count: number;
  total_monthly_cost: number;
  created_at: Date;
  updated_at: Date;

  usage_metrics: {
    last_30_days: {
      total_sessions: number;
      avg_session_minutes: number;
    };
  } | null;
};

export type ToolWhere = {
  ownerDepartment?: Department;
  status?: ToolStatus;
  monthlyCost?: {
    gte?: number;
    lte?: number;
  };
  category?: {
    name: string;
  };
};

export type ToolCreateResponse = {
  id: number;
  name: string;
  description: string;
  vendor: string;
  website_url: string | null;
  category: string;
  monthly_cost: number;
  owner_department: Department;
  status: ToolStatus;
  active_users_count: number;
  created_at: Date;
  updated_at: Date;
};
