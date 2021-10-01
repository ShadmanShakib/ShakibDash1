import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "../store/Auth/AuthSlice";

export default function useAuth() {
  const authenticated = useSelector(selectAuthenticated);
  return useMemo(() => ({ authenticated }), [authenticated]);
}
