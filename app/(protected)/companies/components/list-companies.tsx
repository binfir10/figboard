import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { columns } from "./columns";
import { DataTableCompanies } from "./data-table-companies";
import { useEffect } from "react";

export const revalidate = 0;

export async function ListCompanies() {
  const { userId } = auth();
  if (!userId) {
    return redirect("/sign-in");
  }

  const data = await db.company.findMany({
    where: { userId },
    orderBy: { name: "desc" },
  });

  return <DataTableCompanies columns={columns} data={data} />;
}
