"use client"

import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "craft:flex craft:flex-col craft:gap-4 craft:has-[>[data-slot=checkbox-group]]:gap-3 craft:has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "craft:mb-1.5 craft:font-medium craft:data-[variant=label]:text-sm craft:data-[variant=legend]:text-base",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "craft:group/field-group craft:@container/field-group craft:flex craft:w-full craft:flex-col craft:gap-5 craft:data-[slot=checkbox-group]:gap-3 craft:*:data-[slot=field-group]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "craft:group/field craft:flex craft:w-full craft:gap-2 craft:data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: "craft:flex-col craft:*:w-full craft:[&>.sr-only]:w-auto",
        horizontal:
          "craft:flex-row craft:items-center craft:has-[>[data-slot=field-content]]:items-start craft:*:data-[slot=field-label]:flex-auto craft:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "craft:flex-col craft:*:w-full craft:@md/field-group:flex-row craft:@md/field-group:items-center craft:@md/field-group:*:w-auto craft:@md/field-group:has-[>[data-slot=field-content]]:items-start craft:@md/field-group:*:data-[slot=field-label]:flex-auto craft:[&>.sr-only]:w-auto craft:@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "craft:group/field-content craft:flex craft:flex-1 craft:flex-col craft:gap-0.5 craft:leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "craft:group/field-label craft:peer/field-label craft:flex craft:w-fit craft:gap-2 craft:leading-snug craft:group-data-[disabled=true]/field:opacity-50 craft:has-data-checked:border-primary/30 craft:has-data-checked:bg-primary/5 craft:has-[>[data-slot=field]]:rounded-lg craft:has-[>[data-slot=field]]:border craft:*:data-[slot=field]:p-2.5 craft:dark:has-data-checked:border-primary/20 craft:dark:has-data-checked:bg-primary/10",
        "craft:has-[>[data-slot=field]]:w-full craft:has-[>[data-slot=field]]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "craft:flex craft:w-fit craft:items-center craft:gap-2 craft:text-sm craft:font-medium craft:group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "craft:text-start craft:text-sm craft:leading-normal craft:font-normal craft:text-muted-foreground craft:group-has-data-horizontal/field:text-balance craft:[[data-variant=legend]+&]:-mt-1.5",
        "craft:last:mt-0 craft:nth-last-2:-mt-1",
        "craft:[&>a]:underline craft:[&>a]:underline-offset-4 craft:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "craft:relative craft:-my-2 craft:h-5 craft:text-sm craft:group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="craft:absolute craft:inset-0 craft:top-1/2" />
      {children && (
        <span
          className="craft:relative craft:mx-auto craft:block craft:w-fit craft:bg-background craft:px-2 craft:text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="craft:ms-4 craft:flex craft:list-disc craft:flex-col craft:gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("craft:text-sm craft:font-normal craft:text-destructive", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
