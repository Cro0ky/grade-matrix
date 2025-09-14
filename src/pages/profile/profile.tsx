import { TestModal } from "@/features/modals/testModal.tsx";
import { Layout } from "@/shared/components";
import { Slot } from "@/shared/components/slot/slot.tsx";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectMyself } from "@/shared/store/selectors/myself.selector.ts";
import { openModal } from "@/shared/store/slices/modals.slice.ts";
import { useGetUsersTable } from "@/shared/tables/useGetUsersTable.tsx";
import { EModalName } from "@/shared/types/modal.types.ts";
import { POSITIONS } from "@/shared/types/types.ts";
import { Button, Table } from "@/shared/ui";
import { getFullNameInitials } from "@/shared/utils/getFullnameInitials.ts";

import styles from "./profile.module.scss";

export const Profile = () => {
  const { table } = useGetUsersTable();

  const {
    surname,
    name,
    patronymic,
    hard_skills,
    soft_skills,
    current_position,
    expected_position,
  } = useAppSelector(selectMyself);

  const dispatch = useAppDispatch();

  const useGetSlots = () => {
    return (
      <div className={styles.slots}>
        <Slot className={styles.slot}>
          ФИО: {getFullNameInitials(surname, name, patronymic)}
        </Slot>
        <Slot className={styles.slot}>
          Hard: {hard_skills} Soft: {soft_skills}
        </Slot>
        <Slot className={styles.slot}>
          Фактическая должность: {POSITIONS[current_position]}
        </Slot>
        <Slot className={styles.slot}>
          Ожидаемая должность:{" "}
          {expected_position ? POSITIONS[expected_position] : "Не обозначена"}
        </Slot>
      </div>
    );
  };

  return (
    <Layout title="Профиль">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {useGetSlots()}

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

          <Button
            children={"asdasdasd"}
            onClick={() => dispatch(openModal(EModalName.TEST))}
          />
        </div>
      </div>
      <TestModal />
    </Layout>
  );
};
