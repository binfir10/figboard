import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { HeaderCompany } from "./components/header-company";
import { CompanyInformation } from "./components/info-company";

export default async function CompanyIdPage({
  params,
}: {
  params: { companyId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const company = await db.company.findUnique({
    where: {
      id: params.companyId,
      userId,
    },
  });

  if (!company) {
    return redirect("/");
  }

  return (
    <div className="mb-16">
      <HeaderCompany companyId={company.id} companyName={company.name} />
      <CompanyInformation company={company} />
    </div>
  );
}
