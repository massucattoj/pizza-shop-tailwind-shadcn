import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Sign In' }).click()

  const toast = page.getByText('We send an authentication link to your email.')

  expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Sign In' }).click()

  const toast = page.getByText('Invalid credentials.')

  expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New distributor' }).click()

  expect(page.url()).toContain('/sign-up')
})
