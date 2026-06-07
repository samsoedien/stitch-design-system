import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("craft:animate-pulse craft:rounded-md craft:bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
