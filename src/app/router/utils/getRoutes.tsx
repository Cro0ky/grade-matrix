import { Authorization, Profile, Skills } from "@/pages";
import { ERoles } from "@/shared/types/types.ts";
import { useGetToken } from "@/shared/utils/useGetToken.ts";

export const getRoutes = (role: ERoles) => {
  const { token } = useGetToken();
  if (token) {
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
            path: "*",
            element: <Profile />,
          },
        ];
      case ERoles.Admin:
        return [];
      case ERoles.Moderator:
        return [];
    }
  } else {
    return [
      {
        path: "*",
        element: <Authorization />,
      },
    ];
  }
};
