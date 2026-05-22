export interface LinkItem {
  hash: string;
  title: string;
  url: string;
  category: CategoryType;
  icon: string; // Lucide icon name or custom icon URL
  description: string;
  color: string;
  featured?: boolean; // For organization/showcase items
}

export enum CategoryType {
  ALL = 'All',
  TOOL = '工具',
  FRIEND = '友链',
  OFFICIAL = '官方',
}
