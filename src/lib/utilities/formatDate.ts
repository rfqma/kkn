import { format, parseISO } from "date-fns"
import { id } from "date-fns/locale"

export const formatDate = (date: string) => {
  return format(parseISO(date), "eeee, d MMMM yyyy", {
    locale: id,
  })
}

export const parseDate = (date: string) => {
  return parseISO(date)
}