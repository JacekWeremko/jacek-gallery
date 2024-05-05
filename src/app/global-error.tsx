"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError(propos: { error: unknown }) {
  useEffect(() => {
    Sentry.captureException(propos.error);
  }, [propos.error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Error" />
      </body>
    </html>
  );
}
