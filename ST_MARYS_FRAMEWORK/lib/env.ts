// lib/env.ts
// Centralized optional environment variables accessor to avoid build-time errors.
// Access values via process.env but do not throw during import.
// Only assert the presence of variables at runtime when feature is executed.

export const env = {
  NEXT_PUBLIC_FEATURE_SMILE_QUIZ: process.env.NEXT_PUBLIC_FEATURE_SMILE_QUIZ ?? 'false',
  NEXT_PUBLIC_FEATURE_CHATDOCK: process.env.NEXT_PUBLIC_FEATURE_CHATDOCK ?? 'false',
  NEXT_PUBLIC_FEATURE_3DVIEWER: process.env.NEXT_PUBLIC_FEATURE_3DVIEWER ?? 'false',
};
