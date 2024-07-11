"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { HeaderCompanyProps } from "@/types/types";
import axios from "axios";
import { ArrowLeft, Trash } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export function HeaderCompany(props: HeaderCompanyProps) {
  const router = useRouter();
  const { companyId, companyName } = props;

  const onDeleteCompany = async () => {
    try {
      axios.delete(`/api/company/${companyId}`);
      toast({
        title: "Company deleted",
      });

      router.push("/companies");
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mb-6 flex w-full items-center justify-between">
      <div className="group flex items-center text-2xl font-light">
        <ArrowLeft
          className="hover:-trantx-1 mr-2 h-5 w-5 cursor-pointer transition-all"
          onClick={() => router.push("/companies")}
        />
        Edita la Empresa{" "}
        <span className="ml-2 font-semibold"> {companyName}</span>
      </div>

      <Button
        variant="destructive"
        className="text-foreground"
        onClick={onDeleteCompany}
      >
        <Trash className="mr-2 h-4 w-4 stroke-foreground" />
        Eliminar
      </Button>
    </div>
  );
}
