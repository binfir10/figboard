import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Calendar from "./components/calendar";

export default async function page() {
  const { userId } = auth();
  if (!userId) {
    return redirect("/sign-in");
  }

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      name: "asc",
    },
  });

  const events = await db.event.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div>
      <Calendar companies={companies} events={events} />
    </div>
  );
}
