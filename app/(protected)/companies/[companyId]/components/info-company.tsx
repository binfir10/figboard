import Image from "next/image";

import { User } from "lucide-react";
import { CompanyForm } from "./form-company";
import { CompanyProps } from "@/types/types";
import { ListContacts } from "./list-contacts";
import { NewContact } from "./new-contact/new-contact";

export function CompanyInformation(props: CompanyProps) {
  const { company } = props;

  return (
    <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-10">
      <div className="rounded-lg bg-background p-4 shadow-md hover:shadow-lg">
        <div>
          <Image
            src={company.profileImage}
            alt="Company Image"
            width={500}
            height={500}
            className="mb-3 w-24 rounded-lg object-cover"
          />

          <CompanyForm company={company} />
        </div>
      </div>
      <div className="h-min rounded-lg bg-background p-4 shadow-md hover:shadow-lg">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <User className="h-5 w-5" />
            Contactos
          </div>
          <div>
            <NewContact />
          </div>
        </div>
        <ListContacts company={company} />
      </div>
    </div>
  );
}
