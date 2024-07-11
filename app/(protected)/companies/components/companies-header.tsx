"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import FormCreateCustomer from "./form-create-customer";

export default function CompaniesHeader() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <span className="text-5xl font-bold tracking-tighter">
        Lista de Empresas
      </span>
      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>+ Crear Empresa</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Crear Cliente</DialogTitle>
            <DialogDescription>
              Crea y configura tu nuevo cliente.
            </DialogDescription>
          </DialogHeader>
          <FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
