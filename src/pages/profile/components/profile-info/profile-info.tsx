import { Slot } from "@/shared/components/slot/slot.tsx";
import { type IUser, POSITIONS } from "@/shared/types/types.ts";
import { getFullNameInitials } from "@/shared/utils/getFullnameInitials.ts";
import type { FC } from "react";

import styles from "./profile-info.module.scss";

interface ProfileInfoProps {
  user: IUser;
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ user }) => {
  const {
    surname,
    name,
    patronymic,
    hard_skills,
    soft_skills,
    current_position,
    expected_position,
  } = user;

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
