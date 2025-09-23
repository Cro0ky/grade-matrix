export const useGetToken = () => {
  const token = localStorage.getItem("access_token");
  return { token };
};
