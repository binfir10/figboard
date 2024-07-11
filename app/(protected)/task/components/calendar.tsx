"use client";
import { toast } from "@/components/ui/use-toast";
import { formatDate } from "@/lib/format-price-and-date";
import { DateSelectArg } from "@fullcalendar/core/index.js";
import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugins from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Company, Event } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ModalAddEvent } from "./modal-add-events";

type CalendarProps = {
  companies: Company[];
  events: Event[];
};

export default function Calendar({ companies, events }: CalendarProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>();
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    companieSelected: {
      id: "",
      name: "",
    },
  });

  const handleDateClick = async (selected: DateSelectArg) => {
    setOpen(true);
    setSelectedItem(selected);
  };

  useEffect(() => {
    if (onSaveNewEvent && selectedItem?.view.calendar) {
      const calendarApi = selectedItem.view.calendar;
      calendarApi.unselect();

      const newEventPrisma = {
        companyId: newEvent.companieSelected.id,
        title: newEvent.eventName,
        start: new Date(selectedItem.start),
        allDay: false,
        timeFormat: "H(:mm)",
      };

      axios
        .post(
          `/api/company/${newEvent.companieSelected.id}/event`,
          newEventPrisma,
        )
        .then(() => {
          toast({ title: "Evento creado" });
          router.refresh();
        })
        .catch((error) => {
          toast({
            title: "Error al crear el event",
            variant: "destructive",
          });
        });

      setNewEvent({
        eventName: "",
        companieSelected: {
          name: "",
          id: "",
        },
      });
      setOnSaveNewEvent(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSaveNewEvent, selectedItem, event]);

  const handleEventClick = async (selected: any) => {
    if (
      window.confirm(
        `Estas seguro que quieres eliminar: ${selected.event.title}`,
      )
    ) {
      try {
        await axios.delete(`/api/event/${selected.event._def.publicId}`);
        toast({ title: "Evento Eliminado" });
        router.refresh();
      } catch (error) {
        toast({
          title: "Error al eliminar el evento",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="gap-x-3 md:flex">
        <div className="max-lg:mb-12 md:w-[250px]">
          <div className="h-full w-full overflow-auto">
            <h2 className="mb-5 text-5xl font-bold tracking-tighter">
              Calendario
            </h2>
            {events.map((currentEvent) => {
              return (
                <div
                  key={currentEvent.id}
                  className="mb-2 rounded-md border border-border/80 bg-card px-3 py-2 shadow-lg shadow-muted/60"
                >
                  <p className="text-sm font-light text-foreground/80">
                    {formatDate(currentEvent.start)}
                  </p>
                  <p className="font-bold first-letter:capitalize">
                    {" "}
                    {currentEvent.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="calendar-container flex-1">
          <FullCalendar
            locale={"es"}
            plugins={[
              dayGridPlugin,
              multiMonthPlugin,
              listPlugins,
              timeGridPlugin,
              interactionPlugin,
            ]}
            //titleFormat={{ year: "numeric", month: "long", day: "numeric" }}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right:
                "timeGridDay,dayGridMonth,timeGridWeek,multiMonthYear,listMonth",
            }}
            height={"100vh"}
            buttonIcons={false}
            listDayFormat={{ weekday: "short" }}
            listDaySideFormat={{ day: "numeric", month: "long" }}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            themeSystem="bootstrap5"
            locales={[esLocale]}
          />
        </div>
      </div>
      <ModalAddEvent
        open={open}
        setOpen={setOpen}
        setNewEvent={setNewEvent}
        companies={companies}
        setOnSaveNewEvent={setOnSaveNewEvent}
      />
    </section>
  );
}

const renderEventContent = (eventInfo: any) => {
  return (
    <div className="flex h-full w-full flex-col truncate bg-background">
      {/*<p>{formatDate(eventInfo.event.start)}</p>*/}
      <p>{eventInfo.event.title}</p>
      <p>{eventInfo.event.description}</p>
    </div>
  );
};
