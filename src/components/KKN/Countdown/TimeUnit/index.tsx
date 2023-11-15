interface TimeUnitProperty {
  timeUnit: string
  value: string | undefined
  className?: string
}

export const TimeUnit = ({ timeUnit, value, className }: TimeUnitProperty) => {
  return (
    <>
      <div>
        <h3 className={`text-7xl font-extrabold tabular-nums text-whiteGreen ${className}`}>
          {value}
        </h3>
        <p className="mt-2 font-light text-white">
          {timeUnit}
        </p>
      </div>
    </>
  )
}