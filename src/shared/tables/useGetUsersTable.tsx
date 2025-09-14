import styles from "@/pages/profile/profile.module.scss";
import {
  ERoles,
  type IUser,
  POSITIONS,
  UserPositions,
} from "@/shared/types/types.ts";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import cn from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockData: IUser[] = [
  {
    role: ERoles.User,
    id: "asdasdasdasd2",
    name: "ASDASDASDASD",
    surname: "asdSDASDAd",
    patronymic: "asdasdadasd",
    direction: "asdasdadasd",
    current_position: UserPositions.SeniorSpecialist,
    expected_position: UserPositions.DeputyGeneralDirector,
    hard_skills: 12,
    soft_skills: 12,
  },
  {
    role: ERoles.User,
    id: "asdasdasdasd",
    name: "ASDASDASDASD",
    surname: "asdSDASDAd",
    patronymic: "asdasdadasd",
    direction: "asdasdadasd",
    current_position: UserPositions.SeniorSpecialist,
    expected_position: UserPositions.ProjectManager,
    hard_skills: 12,
    soft_skills: 12,
  },
];

export const useGetUsersTable = () => {
  const [rowSelection, setRowSelection] = useState({});

  const navigate = useNavigate();

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
    state: {
      rowSelection,
    },
    columns: [
      {
        id: "fio",
        header: "ФИО",
        accessorKey: "fio",
        cell: (cell) => (
          <div
            onClick={() => {
              navigate(`/candidate/${cell.row.original.id}`);
            }}
            className={cn(styles.userCell, styles.clickable)}
          >
            {cell.row.original.surname} {cell.row.original.name}{" "}
            {cell.row.original.patronymic ?? ""}
          </div>
        ),
        enableHiding: false,
        enableSorting: false,
      },
      {
        id: "current_position",
        header: "Фактическая должность",
        accessorKey: "current_position",
        cell: (cell) => (
          <div>{POSITIONS[cell.row.original.current_position]}</div>
        ),
        enableHiding: false,
        enableSorting: false,
      },
      {
        id: "expected_position",
        header: "Ожидаемая должность",
        accessorKey: "expected_position",
        enableHiding: false,
        enableSorting: false,
        cell: (cell) => (
          <div>
            {cell.row.original.expected_position
              ? POSITIONS[cell.row.original.expected_position]
              : "Не указана"}
          </div>
        ),
      },
      {
        id: "hard_skills",
        header: "Hard skills",
        accessorKey: "hard_skills",
        enableHiding: false,
        enableSorting: false,
      },
      {
        id: "soft_skills",
        header: "Soft skills",
        accessorKey: "soft_skills",
        enableHiding: false,
        enableSorting: false,
      },
    ],
    data: mockData,
  });

  return { table };
};
