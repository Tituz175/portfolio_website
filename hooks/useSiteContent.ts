import { useContext } from "react";
import { SiteContentCtx } from "../context/SiteContentContext";

export default function useSiteContent() {
  return useContext(SiteContentCtx);
}
