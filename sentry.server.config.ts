// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://981e19c8f1d09c9dce2943934de19478@o4507203850207232.ingest.de.sentry.io/4507203851976784",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
  profilesSampleRate: 1.0, // Profiling sample rate is relative to tracesSampleRate
  integrations: [
    // Add profiling integration to list of integrations
    nodeProfilingIntegration(),
  ],
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  
});
