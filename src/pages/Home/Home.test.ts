import { expect } from '@playwright/test'
import type { Browser, Page } from 'playwright'
import { chromium } from 'playwright'
import { PreviewServer, preview } from 'vite'
import { afterAll, beforeAll, describe, test } from 'vitest'

describe('Тестирование компонента ActiveButton', async () => {
	let server: PreviewServer
	let browser: Browser
	let page: Page

	beforeAll(async () => {
		server = await preview({ preview: { port: 5173 } })
		browser = await chromium.launch()
		page = await browser.newPage()
	})

	afterAll(async () => {
		await browser.close()
		await new Promise<void>((resolve, reject) => {
			server.httpServer.close(error => (error ? reject(error) : resolve()))
		})
	})

	test('Проверка видимости компонента "ActiveButton"', async () => {
		await page.goto('http://localhost:5173')
		const button = page.getByTestId('ActiveButton')
		await expect(button).toBeVisible()
	})

	test('Проверка видимости компонента "Title"', async () => {
		await page.goto('http://localhost:5173')
		const titleTasks = await page.getByTestId('Title').all()
		for (const titleTask of titleTasks) {
			await expect(titleTask).toBeVisible()
		}
	})

	test('Проверка видимости компонента "TextWarning"', async () => {
		await page.goto('http://localhost:5173')
		const textWarnings = await page.getByTestId('TextWarning').all()
		for (const textWarning of textWarnings) {
			await expect(textWarning).toBeVisible()
		}
	})

	test('Проверка видимости компонента "TodoList"', async () => {
		await page.goto('http://localhost:5173')
		const todoList = page.getByTestId('TodoList')
		await expect(todoList).toBeVisible()
	})

	test('Проверка видимости компонента "Input"', async () => {
		await page.goto('http://localhost:5173')
		const input = page.getByTestId('Input')
		await expect(input).toBeVisible()
	})

	test('Проверка отсутствия компонента "PassiveButton"', async () => {
		await page.goto('http://localhost:5173')
		const passiveButton = page.getByTestId('PassiveButton')
		await expect(passiveButton).toBeHidden()
	})

	test('Проверка отсутствия компонента "ItemTodoList"', async () => {
		await page.goto('http://localhost:5173')
		const itemTodoList = page.getByTestId('ItemTodoList')
		await expect(itemTodoList).toBeHidden()
	})
})
