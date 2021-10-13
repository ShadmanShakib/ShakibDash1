import { useMemo } from "react";
import { selectSidebar } from "../store/ui/SidebarSlice";
import { useAppDispatch, useAppSelector } from "./useApp";

export default function useSidebar() {
  const { expanded, isFavorite } = useAppSelector(selectSidebar);
  const dispatch = useAppDispatch();

  return useMemo(() => ({ expanded, isFavorite }), [expanded, isFavorite]);
}
