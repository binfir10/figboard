import CustomIcons from "@/components/custom-icons";
import { BarChart } from "lucide-react";
import GraphicSuscribes from "./graphic-suscribes/graphic-suscribes";

export default function SalesDistributor() {
  return (
    <div className="mt-10 flex flex-col justify-between xl:mt-0">
      <div className="mb-4 flex items-center gap-x-2">
        <CustomIcons icon={BarChart} />
        <span className="text-3xl font-bold tracking-tighter">
          Distribución de ventas
        </span>
      </div>
      <div className="grow rounded-lg bg-background shadow-sm xl:flex xl:items-center">
        <GraphicSuscribes />
      </div>
    </div>
  );
}
