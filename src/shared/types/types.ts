export enum UserPositions {
  JuniorSpecialist = "junior_specialist",
  Specialist = "specialist",
  SeniorSpecialist = "senior_specialist",
  LeadingSpecialist = "leading_specialist",
  ChiefSpecialist = "chief_specialist",
  ProjectManager = "project_manager",
  DepartmentManager = "department_manager",
  DeputyGeneralDirector = "deputy_general_director",
  GeneralDirector = "general_director",
}

export const POSITIONS = {
  [UserPositions.JuniorSpecialist]: "Младший специалист",
  [UserPositions.Specialist]: "Специалист",
  [UserPositions.SeniorSpecialist]: "Старший специалист",
  [UserPositions.LeadingSpecialist]: "Ведущий специалист",
  [UserPositions.ChiefSpecialist]: "Главный специалист",
  [UserPositions.ProjectManager]: "Руководитель проекта",
  [UserPositions.DepartmentManager]: "Руководитель группы проектов",
  [UserPositions.DeputyGeneralDirector]: "Заместитель генерального директора",
  [UserPositions.GeneralDirector]: "Генеральный директор",
};

export enum ERoles {
  Admin = "admin",
  User = "user",
  Moderator = "moderator",
}

export interface IUser {
  role: ERoles;
  id: string;
  name: string;
  surname: string;
  patronymic?: string;
  direction?: string;
  current_position: UserPositions;
  expected_position: UserPositions | null;
  hard_skills: number;
  soft_skills: number;
}

export interface ISkill {
  skill: string;
  description: string;
  maximum_score: number;
}

export interface ICategory {
  category: string;
  skills: ISkill[];
}

export type TAuthorizationState = "login" | "registration";
