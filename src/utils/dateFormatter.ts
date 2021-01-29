import ru from 'date-fns/locale/ru'
import { formatDistance } from 'date-fns'

export const dateFormatter = (date: Date): string => {
    return formatDistance(
        date,
        new Date(),
        { locale: ru }
    )
}