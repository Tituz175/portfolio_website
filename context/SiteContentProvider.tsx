import { useEffect, useState } from "react";
import { SiteContentCtx, SiteContent } from "./SiteContentContext";

interface Props {
  children: React.ReactNode;
}

export default function SiteContentProvider({ children }: Props) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/content")
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data: SiteContent) => {
        if (!cancelled) setContent(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SiteContentCtx.Provider value={{ content, loading, error }}>
      {children}
    </SiteContentCtx.Provider>
  );
}
