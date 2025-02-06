import { Error, Link } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export const metadata: Metadata = generateMetaData(
  "Not Found",
  "You bounced out of my orbit and I could not find where you were heading!",
  "404"
);
export default function NotFound() {
  return (
    <Error
      errorCode={404}
      errorText={"We could not find the page you were looking for."}
      errorHeading={"Whoops!"}
    >
      <Link href="/" style={{ margin: "0 auto" }}>
        Return Home
      </Link>
    </Error>
  );
}
