import { useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectMyself } from "@/shared/store/selectors/myself.selector.ts";
import type { SideBarItemProps } from "@/shared/types/sidebar.types.ts";
import { getSidebarItems } from "@/shared/utils/getSidebarItems.tsx";
import { SideBarItem } from "@/widgets/sidebar/components/sidebar.item.tsx";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  const { role } = useAppSelector(selectMyself);
  const itemsList: SideBarItemProps[] = getSidebarItems(role);
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <div className={styles.list}>
          {itemsList.map((item, index) => (
            <SideBarItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
