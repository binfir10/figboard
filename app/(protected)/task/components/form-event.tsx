import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormEventsProps } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  eventName: z.string().min(2),
  companieSelected: z.object({
    name: z.string().min(2),
    id: z.string(),
  }),
});

export default function FormEvent({
  companies,
  setNewEvent,
  setOnSaveNewEvent,
  setOpen,
}: FormEventsProps) {
  const [selectedCompany, setSelectedCompany] = useState({ id: "", name: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      companieSelected: {
        name: "",
        id: "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setNewEvent(values);
    setOpen(false);
    setOnSaveNewEvent(true);
  }

  const handleCompanyChange = (newValue: string) => {
    const selectedCompany = companies.find(
      (company) => company.id === newValue,
    );

    if (selectedCompany) {
      setSelectedCompany({
        id: selectedCompany.id,
        name: selectedCompany.name,
      });
      form.setValue("companieSelected.name", selectedCompany.name);
      form.setValue("companieSelected.id", selectedCompany.id);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Event name" />
              </FormControl>
              <FormDescription>Este es el nombre del evento</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companieSelected.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Empresa</FormLabel>
              <Select
                onValueChange={(newValue) => {
                  field.onChange(newValue);
                  handleCompanyChange(newValue);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una Empresa" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company.id} value={company.id}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormDescription>
                Selecciona una Empresa entre las existentes
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Crear Evento</Button>
      </form>
    </Form>
  );
}
