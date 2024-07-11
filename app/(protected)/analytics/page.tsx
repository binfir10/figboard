import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { CompaniesChart } from "./companies-chart";

export default async function PageAnalytics() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const events = await db.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold tracking-tighter">Analytics</h2>
      <div className="rounded-lg bg-background p-6 shadow-md">
        <CompaniesChart companies={companies} events={events} />
      </div>
    </div>
  );
}
