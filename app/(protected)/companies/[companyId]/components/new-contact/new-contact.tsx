"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormContact } from "./new-contact-form";

export function NewContact() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>+ Agregar Contacto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Agregar nuevo contacto</DialogTitle>
          <DialogDescription>Crea y configura tu contacto.</DialogDescription>
        </DialogHeader>
        <FormContact setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
