import type { SideBarItemProps } from "@/shared/types/sidebar.types.ts";
import { ERoles } from "@/shared/types/types.ts";
import { Info, SquareUser } from "lucide-react";

export const getSidebarItems = (role: ERoles): SideBarItemProps[] => {
  switch (role) {
    case ERoles.User:
      return [
        {
          icon: <SquareUser />,
          title: "Профиль",
          to: "profile",
        },
        {
          icon: <Info />,
          title: "Информация о категориях",
          to: "skills",
        },
        {
          icon: <Info />,
          title: "Войти",
          to: "login",
        },
      ];
    case ERoles.Admin:
      return [];
    case ERoles.Moderator:
      return [];
  }
};
