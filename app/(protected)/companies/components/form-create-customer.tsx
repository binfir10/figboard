"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormCreateProps } from "@/types/types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  name: z.string().min(2),
  country: z.string().min(2),
  website: z.string().min(2),
  phone: z.string().min(6),
  cif: z.string().min(3),
  profileImage: z.string(),
});

export default function FormCreateCustomer({
  setOpenModalCreate,
}: FormCreateProps) {
  const router = useRouter();
  const [photoUploader, setPhotoUploader] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileImage: "",
    },
  });

  const { isValid } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      axios.post("/api/company", values);
      toast({
        title: "Empresa creada!",
        description: "La Empresa ha sido creada correctamente",
        variant: "success",
      });

      setOpenModalCreate(false);
      router.refresh();
    } catch (error) {
      toast({
        title: "Error al crear la Empresa",
        description: "Error al crear la Empresa, intentalo de nuevo",
        variant: "destructive",
      });
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>País</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un país..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AR">Argentina</SelectItem>
                      <SelectItem value="BR">Brasil</SelectItem>
                      <SelectItem value="CL">Chile</SelectItem>
                      <SelectItem value="CO">Colombia</SelectItem>
                      <SelectItem value="MX">Mexico</SelectItem>
                      <SelectItem value="UY">Uruguay</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sitio Web</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="www.example.com"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+11 1234 5678"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cif"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CP</FormLabel>
                  <FormControl>
                    <Input placeholder="B-1234" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagen de perfil</FormLabel>
                  <FormControl>
                    {photoUploader ? (
                      <p className="m-auto flex h-10 items-center justify-center rounded-md bg-green-950/50 text-center text-sm">
                        Image uploaded!
                      </p>
                    ) : (
                      <UploadButton
                        className="outline-3 flex-row rounded-lg bg-accent/30 hover:bg-accent/40"
                        {...field}
                        endpoint="profileImage"
                        onClientUploadComplete={(res) => {
                          form.setValue("profileImage", res?.[0].url);
                          toast({
                            title: "Photo uploaded!",
                          });
                          setPhotoUploader(true);
                        }}
                        onUploadError={(error: Error) => {
                          toast({
                            title: "Error uploading photo",
                          });
                        }}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={!isValid} type="submit">
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
}
