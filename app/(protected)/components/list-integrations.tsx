import CustomIcons from "@/components/custom-icons";
import { List } from "lucide-react";
import TableIntegration from "./table-integrations";

export default function ListIntegrations() {
  return (
    <div className="h-full max-lg:mt-10">
      <div className="mb-5 flex items-center gap-x-2">
        <CustomIcons icon={List} />

        <span className="text-3xl font-bold tracking-tighter">
          Lista de Integraciones
        </span>
      </div>
      <div className="rounded-lg bg-background shadow-sm">
        <TableIntegration />
      </div>
    </div>
  );
}
