"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "@/lib/utils"
import { MinusIcon } from "lucide-react"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName
      )}
      spellCheck={false}
      className={cn("craft:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "craft:flex craft:items-center craft:rounded-lg craft:has-aria-invalid:border-destructive craft:has-aria-invalid:ring-3 craft:has-aria-invalid:ring-destructive/20 craft:dark:has-aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "craft:relative craft:flex craft:size-8 craft:items-center craft:justify-center craft:border-y craft:border-e craft:border-input craft:text-sm craft:transition-all craft:outline-none craft:first:rounded-s-lg craft:first:border-s craft:last:rounded-e-lg craft:aria-invalid:border-destructive craft:data-[active=true]:z-10 craft:data-[active=true]:border-ring craft:data-[active=true]:ring-3 craft:data-[active=true]:ring-ring/50 craft:data-[active=true]:aria-invalid:border-destructive craft:data-[active=true]:aria-invalid:ring-destructive/20 craft:dark:bg-input/30 craft:dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="craft:pointer-events-none craft:absolute craft:inset-0 craft:flex craft:items-center craft:justify-center">
          <div className="craft:h-4 craft:w-px craft:animate-caret-blink craft:bg-foreground craft:duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="craft:flex craft:items-center craft:[&_svg:not([class*=size-])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon
      />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
