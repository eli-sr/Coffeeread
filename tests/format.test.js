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
