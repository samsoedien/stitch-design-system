"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "craft:group/calendar craft:bg-background craft:p-2 craft:[--cell-radius:var(--radius-md)] craft:[--cell-size:--spacing(7)] craft:in-data-[slot=card-content]:bg-transparent craft:in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("craft:w-fit", defaultClassNames.root),
        months: cn(
          "craft:relative craft:flex craft:flex-col craft:gap-4 craft:md:flex-row",
          defaultClassNames.months
        ),
        month: cn("craft:flex craft:w-full craft:flex-col craft:gap-4", defaultClassNames.month),
        nav: cn(
          "craft:absolute craft:inset-x-0 craft:top-0 craft:flex craft:w-full craft:items-center craft:justify-between craft:gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "craft:size-(--cell-size) craft:p-0 craft:select-none craft:aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "craft:size-(--cell-size) craft:p-0 craft:select-none craft:aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "craft:flex craft:h-(--cell-size) craft:w-full craft:items-center craft:justify-center craft:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "craft:flex craft:h-(--cell-size) craft:w-full craft:items-center craft:justify-center craft:gap-1.5 craft:text-sm craft:font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "craft:relative craft:rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "craft:absolute craft:inset-0 craft:bg-popover craft:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "craft:font-medium craft:select-none",
          captionLayout === "label"
            ? "craft:text-sm"
            : "craft:flex craft:items-center craft:gap-1 craft:rounded-(--cell-radius) craft:text-sm craft:[&>svg]:size-3.5 craft:[&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn(
          "craft:w-full craft:border-collapse",
          defaultClassNames.month_grid
        ),
        weekdays: cn("craft:flex", defaultClassNames.weekdays),
        weekday: cn(
          "craft:flex-1 craft:rounded-(--cell-radius) craft:text-[0.8rem] craft:font-normal craft:text-muted-foreground craft:select-none",
          defaultClassNames.weekday
        ),
        week: cn("craft:mt-2 craft:flex craft:w-full", defaultClassNames.week),
        week_number_header: cn(
          "craft:w-(--cell-size) craft:select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "craft:text-[0.8rem] craft:text-muted-foreground craft:select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "craft:group/day craft:relative craft:aspect-square craft:h-full craft:w-full craft:rounded-(--cell-radius) craft:p-0 craft:text-center craft:select-none craft:[&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)",
          props.showWeekNumber
            ? "craft:[&:nth-child(2)[data-selected=true]_button]:rounded-s-(--cell-radius)"
            : "craft:[&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "craft:relative craft:isolate craft:z-0 craft:rounded-s-(--cell-radius) craft:bg-muted craft:after:absolute craft:after:inset-y-0 craft:after:end-0 craft:after:w-4 craft:after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("craft:rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "craft:relative craft:isolate craft:z-0 craft:rounded-e-(--cell-radius) craft:bg-muted craft:after:absolute craft:after:inset-y-0 craft:after:start-0 craft:after:w-4 craft:after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "craft:rounded-(--cell-radius) craft:bg-muted craft:text-foreground craft:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "craft:text-muted-foreground craft:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "craft:text-muted-foreground craft:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("craft:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("craft:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("craft:size-4", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("craft:size-4", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="craft:flex craft:size-(--cell-size) craft:items-center craft:justify-center craft:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "craft:relative craft:isolate craft:z-10 craft:flex craft:aspect-square craft:size-auto craft:w-full craft:min-w-(--cell-size) craft:flex-col craft:gap-1 craft:border-0 craft:leading-none craft:font-normal craft:group-data-[focused=true]/day:relative craft:group-data-[focused=true]/day:z-10 craft:group-data-[focused=true]/day:border-ring craft:group-data-[focused=true]/day:ring-[3px] craft:group-data-[focused=true]/day:ring-ring/50 craft:data-[range-end=true]:rounded-(--cell-radius) craft:data-[range-end=true]:rounded-e-(--cell-radius) craft:data-[range-end=true]:bg-primary craft:data-[range-end=true]:text-primary-foreground craft:data-[range-middle=true]:rounded-none craft:data-[range-middle=true]:bg-muted craft:data-[range-middle=true]:text-foreground craft:data-[range-start=true]:rounded-(--cell-radius) craft:data-[range-start=true]:rounded-s-(--cell-radius) craft:data-[range-start=true]:bg-primary craft:data-[range-start=true]:text-primary-foreground craft:data-[selected-single=true]:bg-primary craft:data-[selected-single=true]:text-primary-foreground craft:dark:hover:text-foreground craft:[&>span]:text-xs craft:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
