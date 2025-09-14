import type { RowData, Table } from "@tanstack/react-table";
import type { ReactNode } from "react";

export interface TableProps<
  TData extends RowData,
  TParams extends Record<string, string | string[] | undefined>,
> {
  table: Table<TData>;
  onScrollEnd?: () => void;
  toolbarSlot?: ReactNode;
  filters?: TParams;
  isLoading?: boolean;
  loader?: ReactNode;
  setFilters?: (disptach: TParams) => void;
  emptyFallback?: ReactNode;
  hideSettings?: boolean;
}
