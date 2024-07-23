import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText(
    'We have sent an authentication link to your email!',
  )

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText('Invalid credentials!')

  await expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New establishment' }).click()

  expect(page.url()).toContain('/sign-up')
})
