// @ts-check
import { test, expect } from '@playwright/test'
import search from '../src/utils/search'

test('search function returns empty list with a empty sentences array', () => {
  expect(search([], 'testArray')).toStrictEqual([])
})

test('search function returns empty list with no matches', () => {
  expect(search(['hola', 'adios', 'test', 'array'], 'testArray')).toStrictEqual([])
})

test('search function returns the sentence index of the match', () => {
  expect(search(['I want to create a testArray for this test'], 'testArray')).toStrictEqual([0])
})

test('search function returns the array of index of the matches 1', () => {
  const senteceArray = ['testArray', 'NO', 'atestArray', 'NO', 'testArraya', 'atestArraya']
  expect(search(senteceArray, 'testArray')).toStrictEqual([0, 2, 4, 5])
})

test('search function returns the array of index of the matches 2', () => {
  const senteceArray = ['estamos en testArraytestArray', 'NO', 'testArray en testArray', 'NO']
  expect(search(senteceArray, 'testArray')).toStrictEqual([0, 2])
})
