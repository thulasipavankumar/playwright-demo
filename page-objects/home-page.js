const { expect } = require('@playwright/test')
exports.HomePage = class HomePage {
  /**
   * @param {import ('@playwright/test').Page} page
   */
  constructor (page) {
    this.page = page
    this.acceptCookies = page.getByRole('button', { name: 'Allow all cookies' })
    this.logoElement = page.locator('.logo').first();;
    this.services_link = page.locator('nav.nav a[href="/services"]')
    this.cases_link = page.locator('nav.nav a[href="/cases"')
    this.abous_us_link = page.locator('nav.nav a[href="/about-us"]');
    this.contact_link = page.locator('nav.nav a[href="/contact"]')
    this.jobs_link = page.locator('nav.nav a[href="/jobs"]')
    this.home_link = page.locator('[href*="/"]')
  }

  async searchKeysInSearchBar (keyword) {
    try {
      await this.searchButton.click()
      await this.searchBar.fill(keyword)
    } catch (e) {
      await page.screenshot({ path: 'screenshots/SearchFailKeyPress.png',fullPage: true  });
      throw e;
    }
  }
  async navigateToHome(){
    await this.page.goto('https://www.uniweb.eu/')
    await this.acceptCookies.click()
    await expect(page).toHaveTitle('UniWeb')
  }
  async navigateToSolutionsPage(){
    await this.services_link.click();
  }
  async navigateToCasesPage(){
    await this.cases_link.click();
  }
  async navigateToAboutUsPage(){
    await this.abous_us_link.click();
  }
  async navigateToContactPage(){
    await this.contact_link.click();
  }
  async navigateToJobsPage(){
    await this.jobs_link.click();
  }
  async assertForAboutUsPage(){
    await expect(page).toHaveURL('https://www.uniweb.eu/about-us'); 
  }
  async assertForLogoVisibility(){
    const visibility = await this.logoElement.isVisible(); 
    await expect(visibility).not.toBeNull();
  }
  async assertForContactPage(){
    await expect(page).toHaveURL('https://www.uniweb.eu/contact'); 
  }

  async assertForJobsPage(){
    await expect(page).toHaveURL('https://www.uniweb.eu/jobs'); 
  }
  async assertForCasesPage(){
    await expect(page).toHaveURL('https://www.uniweb.eu/cases'); 
  }
  async assertForSolutionsPage(){
    await expect(page).toHaveURL('https://www.uniweb.eu/services'); 
  }

  
  
}
