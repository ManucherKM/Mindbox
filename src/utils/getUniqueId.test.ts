import { describe, expect, test } from 'vitest'
import { getUniqueId } from './getUniqueId'

describe('Тестирование функции getUniqueId', () => {
	test('Функция возвращает значение с типом "number"', () => {
		expect(getUniqueId()).toBeTypeOf('number')
	})
})
