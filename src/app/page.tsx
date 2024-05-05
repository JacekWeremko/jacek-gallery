import { SignedIn, SignedOut } from "@clerk/nextjs";
import { desc } from "drizzle-orm";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db"
import { Images } from "./_components/images";

export const dynamic = "force-dynamic"

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
