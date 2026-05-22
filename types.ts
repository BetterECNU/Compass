export interface LinkItem {
  hash: string;
  title: string;
  url: string;
  category: CategoryType;
  icon: string; // Lucide icon name or custom icon URL
  description: string;
  color: string;
}

export enum CategoryType {
  ALL = 'All',
  TOOL = '工具',
  DEVELOPER = '开源组织',
  OFFICIAL = '官方',
}
