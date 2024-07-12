import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Shop profile' }).click()

  await page.getByLabel('Name').fill('Rocket Pizza')
  await page.getByLabel('Description').fill('Another Description')

  await page.getByRole('button', { name: 'Save' }).click()

  // wait for every http request to finish
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Profile was update successfully.')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(250)

  expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})
