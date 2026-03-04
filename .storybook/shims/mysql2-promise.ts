// A browser-safe stub for mysql2/promise used in Storybook.
// If this ever executes, something server-only leaked into the SB bundle.

export type ConnectionOptions = Record<string, unknown>;
export type RowDataPacket = Record<string, unknown>;

export async function createConnection(): Promise<never> {
  throw new Error("mysql2/promise is not available in Storybook (browser).");
}

// support default import style too:
const mysql2PromiseDefault = {
  createConnection,
};
export default mysql2PromiseDefault;
