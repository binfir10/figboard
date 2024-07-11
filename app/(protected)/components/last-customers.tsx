import CustomIcons from "@/components/custom-icons";
import { Building } from "lucide-react";
import { CustomersTable } from "./customer-table";

export default function LastCutomers() {
  return (
    <div className="">
      <div className="mb-4 flex items-center gap-x-2">
        <CustomIcons icon={Building} />
        <span className="text-3xl font-bold tracking-tighter">
          Últimos Clientes
        </span>
      </div>
      <div className="rounded-lg bg-background p-5 shadow-sm">
        <CustomersTable />
      </div>
    </div>
  );
}
