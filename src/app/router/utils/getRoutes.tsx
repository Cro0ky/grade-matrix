import { Login, Profile, Skills } from "@/pages";
import { ERoles } from "@/shared/types/types.ts";

export const getRoutes = (role: ERoles) => {
  switch (role) {
    case ERoles.User:
      return [
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <Profile />,
        },
      ];
    case ERoles.Admin:
      return [];
    case ERoles.Moderator:
      return [];
  }
};
