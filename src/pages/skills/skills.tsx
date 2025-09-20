import { SkillsMapper } from "@/pages/skills/components/skills.mapper.tsx";
import { Layout } from "@/shared/components";
import { useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectHardSkills } from "@/shared/store/selectors/skills.selector.ts";

import styles from "./skills.module.scss";

export const Skills = () => {
  const hardSkills = useAppSelector(selectHardSkills);
  const softSkills = useAppSelector(selectHardSkills);
  return (
    <Layout title="Категории и навыки">
      <div className={styles.wrapper}>
        <h1>Hard-skills</h1>
        <SkillsMapper skills={hardSkills} />
        <h1>Soft-skills</h1>
        <SkillsMapper skills={softSkills} />
      </div>
    </Layout>
  );
};
