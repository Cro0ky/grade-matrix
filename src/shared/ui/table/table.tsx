import { TableBody, TableHead } from "@/shared/ui/table/components";
import type { RowData } from "@tanstack/react-table";

import type { TableProps } from "./table.types.ts";

import styles from "./table.module.scss";

export const Table = <
  TData extends RowData,
  TParams extends Record<string, string | string[] | undefined>,
>({
  table,
  isLoading,
}: TableProps<TData, TParams>) => {
  return (
    <table className={styles.table}>
      <TableHead table={table} />
      {!isLoading && <TableBody table={table} />}
    </table>
  );
};
