import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebar } from "../store/ui/SidebarSlice";
import { RootState, AppDispatch } from "../store/store";
export default function useSidebar() {
  const { expanded, openFavorite } = useSelector(selectSidebar);
  return useMemo(() => ({ expanded, openFavorite }), [expanded, openFavorite]);
}
