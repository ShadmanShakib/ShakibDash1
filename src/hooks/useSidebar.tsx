import { useMemo } from "react";
import { selectSidebar } from "../store/ui/SidebarSlice";
import { useAppSelector } from "./useApp";

export default function useSidebar() {
  const { expanded, isFavorite } = useAppSelector(selectSidebar);

  return useMemo(() => ({ expanded, isFavorite }), [expanded, isFavorite]);
}
