import { TestModal } from "@/features/modals/testModal.tsx";
import { ProfileInfo } from "@/pages/profile/components/profile-info/profile-info.tsx";
import { Layout } from "@/shared/components";
import { useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectMyself } from "@/shared/store/selectors/myself.selector.ts";
import { useGetUsersTable } from "@/shared/tables/useGetUsersTable.tsx";
import { Table } from "@/shared/ui";

import styles from "./profile.module.scss";

export const Profile = () => {
  const { table } = useGetUsersTable();

  const user = useAppSelector(selectMyself);

  return (
    <Layout title="Профиль" isShowCloseButton={false}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ProfileInfo user={user} />

          <Table
            // loader={
            //   <SkeletonTableItems
            //     firstColMaxWidth={132}
            //     lastColMaxWidth={89}
            //     rows={24}
            //     columns={9}
            //   />
            // }
            // filters={filters}
            // setFilters={setFilters}
            // emptyFallback={
            // onScrollEnd={fetchNextPage}
            // toolbarSlot={
            //   <div className={styles.toolbar}>
            //     <Input
            //       placeholder={t("common.search-by-fio")}
            //       icon={<Search />}
            //       value={queryParams.search}
            //       maxLength={64}
            //       showMaxLength={false}
            //       onChange={handleSearch}
            //       className={styles.toolbar__search}
            //     />
            //   </div>
            // }
            table={table}
          />
        </div>
      </div>
      <TestModal />
    </Layout>
  );
};
