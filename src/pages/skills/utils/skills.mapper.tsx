import styles from "./skills.mapper.module.scss";
import type { ICategory } from "@/shared/types/types.ts";
import type { FC } from "react";

interface ISkillsMapper {
  skills: ICategory[];
}

export const SkillsMapper: FC<ISkillsMapper> = ({ skills }) => {
  return skills.map(({ skills, category }) => (
    <div className={styles.wrapper}>
      <span className={styles.category}>{category}</span>
      <div>
        {skills.map(({ skill, description, maximum_score }) => (
          <div className={styles.skill_wrapper}>
            <span className={styles.skill}>{skill}</span>
            <span className={styles.description}>{description}</span>
            <span className={styles.maximum_score}>{maximum_score}</span>
          </div>
        ))}
      </div>
    </div>
  ));
};
