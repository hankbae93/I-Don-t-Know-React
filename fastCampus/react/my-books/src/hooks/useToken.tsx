import { useSelector } from "react-redux";
import { RootState } from "../types";

export default function useToken() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  return token;
}
