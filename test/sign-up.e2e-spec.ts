import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Name of the establishment').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('123812641264')

  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Restaurant successfully registered!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Name of the establishment').fill('Invalid name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('123812641264')

  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Error while registering restaurant.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Log in' }).click()

  expect(page.url()).toContain('/sign-in')
})
