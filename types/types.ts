import { LucideIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Company } from "@prisma/client";

export type CardSummaryProps = {
  icon: LucideIcon;
  total: string;
  average: number;
  title: string;
  tooltipText: string;
};

export type CustomIconProps = {
  icon: LucideIcon;
};

export type CustomTooltipProps = {
  content: string;
};

export type FormCreateProps = {
  setOpenModalCreate: Dispatch<SetStateAction<boolean>>;
};

export type HeaderCompanyProps = {
  companyId: string;
  companyName: string;
};

export type CompanyProps = {
  company: Company;
};

export type FormContactProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type ModalAddEventProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  companies: Company[];
  setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>;
  setNewEvent: Dispatch<
    SetStateAction<{
      eventName: string;
      companieSelected: {
        id: string;
        name: string;
      };
    }>
  >;
};

export type FormEventsProps = {
  setNewEvent: Dispatch<
    SetStateAction<{
      eventName: string;
      companieSelected: {
        id: string;
        name: string;
      };
    }>
  >;
  setOpen: Dispatch<SetStateAction<boolean>>;
  companies: Company[];
  setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>;
};
