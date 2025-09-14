import { flexRender, type RowData, type Table } from "@tanstack/react-table";
import cn from "classnames";

import styles from "./table-head.module.scss";

interface Props<TData extends RowData> {
  table: Table<TData>;
}

export const TableHead = <TData extends RowData>({ table }: Props<TData>) => {
  return (
    <thead className={styles.head}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              className={cn(styles.cell)}
              key={header.id}
              colSpan={header.colSpan}
            >
              <div className={styles.headCellContent}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
