import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Trampolining } from "@/entities";
import type { ConnectionOptions } from "mysql2/promise";

export const metadata: Metadata = generateMetaData(
  "Trampolining",
  "Thoughts and ideas on my trampoline journey",
  "about-me/trampolining"
);

const connectionOptions: ConnectionOptions = {
  host: `${process.env.CANGAROOS_DB_HOST}`,
  user: `${process.env.CANGAROOS_DB_USER}`,
  password: `${process.env.CANGAROOS_DB_PASSWORD}`,
  database: `${process.env.CANGAROOS_DB_NAME}`,
};

export default async function TrampoliningPage() {
  return <Trampolining connectionOptions={connectionOptions} />;
}
