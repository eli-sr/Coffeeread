// @ts-check
import { test, expect } from '@playwright/test'
import format from '../src/utils/format'

test('format function returns empty list with a empty string', () => {
  expect(format('')).toStrictEqual([])
})

test('format function returns empty list with a spaced string', () => {
  expect(format('   ')).toStrictEqual([])
})

test('format function separates the test into sentences ending in "."', () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in nisi sit amet lorem dignissim aliquet quis ac ligula. Curabitur sapien lectus, fringilla vel facilisis sit amet, interdum in odio. Praesent iaculis accumsan metus, sit amet porttitor elit auctor non. Nulla sed sollicitudin nisl. Maecenas laoreet erat arcu, et rhoncus nisi ornare sit amet. Nullam nec ipsum massa. Nunc commodo tellus eget dapibus ornare. '
  const result = format(text)
  const ok = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Integer in nisi sit amet lorem dignissim aliquet quis ac ligula.',
    'Curabitur sapien lectus, fringilla vel facilisis sit amet, interdum in odio.',
    'Praesent iaculis accumsan metus, sit amet porttitor elit auctor non.',
    'Nulla sed sollicitudin nisl.',
    'Maecenas laoreet erat arcu, et rhoncus nisi ornare sit amet.',
    'Nullam nec ipsum massa.',
    'Nunc commodo tellus eget dapibus ornare.'
  ]
  expect(result).toStrictEqual(ok)
})

test('format function removes "\\n" and "-"', () => {
  const text = `La invocación de los métodos remotos requiere el paso de argumentos, y por lo tanto la serializa-
ción de los mismos. La serialización se da usando las tecnologías de serialización de Java, por lo
cual hay que ser cuidadosos en la elección de los argumentos, en el uso de las clausulas trasient
correspondientes, etc.
Al usar RMI, la codificación de la invocación de métodos remotos se asemeja a la de métodos lo-
cales. Sin embargo, la invocación remota tiene problemáticas asociadas a la naturaleza distribuida
del proceso, y esto deriva en el uso recurrente de excepciones. Es muy importante saber manejarlas,
e incluso generar código capaz de reintentar invocaciones en caso de RemoteException.`
  const result = format(text)
  const ok = [
    'La invocación de los métodos remotos requiere el paso de argumentos, y por lo tanto la serialización de los mismos.',
    'La serialización se da usando las tecnologías de serialización de Java, por lo cual hay que ser cuidadosos en la elección de los argumentos, en el uso de las clausulas trasient correspondientes, etc.',
    'Al usar RMI, la codificación de la invocación de métodos remotos se asemeja a la de métodos locales.',
    'Sin embargo, la invocación remota tiene problemáticas asociadas a la naturaleza distribuida del proceso, y esto deriva en el uso recurrente de excepciones.',
    'Es muy importante saber manejarlas, e incluso generar código capaz de reintentar invocaciones en caso de RemoteException.'
  ]
  expect(result).toStrictEqual(ok)
})
