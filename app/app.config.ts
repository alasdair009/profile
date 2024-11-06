import { boolean, coerce, create, defaulted, enums, object, optional, string } from "superstruct";

// Define the validation/defaulting schemas used for config
const isTruthy = (input: string | undefined) => Boolean((input ?? "").match(/1|true/gi));
const SomeString = defaulted(string(), "");
const SomeBool = coerce(boolean(), optional(string()), isTruthy);
const SomeEnum = <T extends string>(...opts: T[]) => defaulted(enums(opts), opts[0]);
const Env = object({
  VERCEL_ENV: SomeEnum("development", "preview", "production"),
  VERCEL_URL: SomeString,
  ALLOW_TRANSITIONS: SomeBool,
});

/**
 * Load validated process.env values from the env property in next.config.js
 */
const env = create(
  {
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    ALLOW_TRANSITIONS: process.env.ALLOW_TRANSITIONS,
  },
  Env
);

export const siteConfig = {
  VERCEL_ENV: env.VERCEL_ENV,
  VERCEL_URL: env.VERCEL_URL,
  ALLOW_TRANSITIONS: env.ALLOW_TRANSITIONS,
};
