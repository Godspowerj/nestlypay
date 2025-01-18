"use client";

import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-auto btn py-7 bg-white/100 border-black/10 text-base px-10 font-medium text-black/100 hover:bg-brand-blue hover:text-white/100 lg:py-6",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                />
            </PopoverContent>
        </Popover>
    );
}