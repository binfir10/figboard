"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Company } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "profileImage",
    header: "Imagen",
    cell: ({ row }) => {
      const image = row.getValue("profileImage");
      return (
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={
              image && typeof image === "string" ? image : "/images/empresa.png"
            }
            alt="Profile Image"
            className="h-10 w-10 object-cover"
            width={200}
            height={200}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <Link href={`/companies/${row.original.id}`}>{name}</Link>;
    },
  },
  {
    accessorKey: "cif",
    header: "CP",
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "country",
    header: "País",
  },
  {
    accessorKey: "website",
    header: "Sitio Web",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-6 p-1 text-center">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/companies/${id}`}>
              <DropdownMenuItem className="w-full">
                <Pencil className="mr-2 h-4 w-4" />
                Editar
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
