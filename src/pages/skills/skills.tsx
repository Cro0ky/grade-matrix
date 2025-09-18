import { hardSkills, softSkills } from "@/pages/skills/skills.const.ts";
import { SkillsMapper } from "@/pages/skills/utils/skills.mapper.tsx";
import { Layout } from "@/shared/components";

import styles from "./skills.module.scss";

export const Skills = () => {
  return (
    <Layout title="Категории и навыки">
      <div className={styles.wrapper}>
        <SkillsMapper skills={hardSkills} />
        <SkillsMapper skills={softSkills} />
      </div>
    </Layout>
  );
};
