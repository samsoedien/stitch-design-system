import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      className={cn("craft:data-horizontal:w-full craft:data-vertical:h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="craft:relative craft:flex craft:w-full craft:touch-none craft:items-center craft:select-none craft:data-disabled:opacity-50 craft:data-vertical:h-full craft:data-vertical:min-h-40 craft:data-vertical:w-auto craft:data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="craft:relative craft:grow craft:overflow-hidden craft:rounded-full craft:bg-muted craft:select-none craft:data-horizontal:h-1 craft:data-horizontal:w-full craft:data-vertical:h-full craft:data-vertical:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="craft:bg-primary craft:select-none craft:data-horizontal:h-full craft:data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="craft:relative craft:block craft:size-3 craft:shrink-0 craft:rounded-full craft:border craft:border-ring craft:bg-white craft:ring-ring/50 craft:transition-[color,box-shadow] craft:select-none craft:after:absolute craft:after:-inset-2 craft:hover:ring-3 craft:focus-visible:ring-3 craft:focus-visible:outline-hidden craft:active:ring-3 craft:disabled:pointer-events-none craft:disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
