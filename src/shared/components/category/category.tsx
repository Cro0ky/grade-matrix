import type { ICategory } from "@/shared/types/types.ts";
import type { FC } from "react";

export const Category: FC<ICategory> = ({ category, skills }) => {
  return (
    <div>
      {category},{" "}
      {skills.map(({ skill, maximum_score, description }) => (
        <div>
          {skill}, {maximum_score}, {description}
        </div>
      ))}
    </div>
  );
};
