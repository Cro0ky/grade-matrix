import { useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectMyself } from "@/shared/store/selectors/myself.selector.ts";
import type { SideBarItemProps } from "@/shared/types/sidebar.types.ts";
import { Button } from "@/shared/ui";
import { getSidebarItems } from "@/shared/utils/getSidebarItems.tsx";
import { SideBarItem } from "@/widgets/sidebar/components/sidebar.item.tsx";
import cn from "classnames";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  const { role } = useAppSelector(selectMyself);
  const itemsList: SideBarItemProps[] = getSidebarItems(role);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(styles.sidebar, {
        [styles.isCollapsed]: isCollapsed,
      })}
    >
      <div className={styles.content}>
        <div className={styles.list}>
          {itemsList.map((item, index) => (
            <SideBarItem key={index} {...item} />
          ))}
        </div>
        <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          children={<ChevronRight size={24} />}
          className={cn(styles.button, {
            [styles.button_collapsed]: isCollapsed,
          })}
        />
      </div>
    </div>
  );
};
