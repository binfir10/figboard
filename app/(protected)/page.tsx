"use client";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import CardSummary from "./components/card-summary";
import LastCutomers from "./components/last-customers";
import SalesDistributor from "./components/sales-distributor";
import TotalSubscribers from "./components/total-subscribers";
import ListIntegrations from "./components/list-integrations";

export default function page() {
  return (
    <section className="mb-40">
      <h2 className="text-5xl font-bold tracking-tighter">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
        {dataCardsSummary.map(
          ({ icon, total, average, title, tooltipText }) => (
            <CardSummary
              key={title}
              icon={icon}
              total={total}
              average={average}
              title={title}
              tooltipText={tooltipText}
            />
          ),
        )}
      </div>
      <div className="mt-12 grid grid-cols-1 md:gap-x-10 xl:grid-cols-2">
        <LastCutomers />
        <SalesDistributor />
      </div>

      <div className="mt-12 grid grid-cols-1 md:gap-x-10 xl:grid-cols-2">
        <TotalSubscribers />
        <ListIntegrations />
      </div>
    </section>
  );
}

const dataCardsSummary = [
  {
    icon: UserRound,
    total: "12.450",
    average: 15,
    title: "Empresas creadas",
    tooltipText: "Ver todas las empresas creadas",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Ingresos Totales",
    tooltipText: "Ver todo el resumen",
  },
  {
    icon: BookOpenCheck,
    total: "363.95",
    average: 30,
    title: "Porcentaje de alcance",
    tooltipText: "Ver todo el resumen",
  },
];
