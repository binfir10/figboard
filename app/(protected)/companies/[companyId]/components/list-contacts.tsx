import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Delete, Mail, Phone, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CompanyProps } from "@/types/types";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export async function ListContacts(props: CompanyProps) {
  const { company } = props;
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const contacts = await db.contact.findMany({
    where: {
      company: {
        id: company.id,
      },
    },
  });

  if (contacts.length === 0) {
    return <p>Actualmente no dispones de ningún contacto</p>;
  }

  return (
    <div>
      <div className="mb-2 mt-6 grid grid-cols-3 items-center justify-between gap-x-3 rounded-lg bg-accent p-2 px-4">
        <p>Nombre</p>
        <p>Rol</p>
        <p className="text-right">Contacto</p>
      </div>

      {contacts.map((contact) => (
        <div key={contact.id}>
          <div className="grid grid-cols-3 items-center justify-between gap-x-3 px-4">
            <p>{contact.name}</p>
            <p>{contact.role}</p>
            <div className="flex items-center justify-end gap-x-6">
              <a
                href={`https://api.whatsapp.com/send?phone=${contact.phone}`}
                target="_blank"
              >
                <Image
                  src="/images/whatsapp.svg"
                  alt="Whatsapp"
                  width={14}
                  height={14}
                />
                {/*<Phone className="h-4 w-4" />{" "}*/}
              </a>
              <a href={`mailto:${contact.email}`} target="_blank">
                <Mail className="h-4 w-4" />
              </a>
              <div>
                <Trash className="h-4 w-4 hover:cursor-pointer hover:text-red-600" />
              </div>
            </div>
          </div>

          {contact !== contacts[contacts.length - 1] && (
            <Separator className="my-3" />
          )}
        </div>
      ))}
    </div>
  );
}
