import { flexRender, type RowData, type Table } from "@tanstack/react-table";
import cn from "classnames";

import styles from "./table-body.module.scss";

interface TableBodyProps<TData extends RowData> {
  table: Table<TData>;
}

export const TableBody = <TData extends RowData>({
  table,
}: TableBodyProps<TData>) => {
  return (
    <tbody className={styles.body}>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td className={cn(styles.cell)} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
