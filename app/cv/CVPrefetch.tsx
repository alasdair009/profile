"use client";

import { useEffect } from "react";

export function CVPrefetch() {
  useEffect(() => {
    const controller = new AbortController();

    void fetch("/api/cv", {
      cache: "force-cache",
      signal: controller.signal,
    }).catch(() => {
      // Ignore warm-up failures and let the real navigation handle errors.
    });

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}
