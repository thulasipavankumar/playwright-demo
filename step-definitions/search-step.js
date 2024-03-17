const {HomePage} = require('../page-objects/home-page')
const { Given, When, Then } = require('@cucumber/cucumber')
const { test, expect } = require('@playwright/test')

Given('User visits tobania website', async () => {
  const homePage = new HomePage(global.page)
  await homePage.navigateToHomePage();
})


When('User is on the website home page',async () => {   
    const homePage = new HomePage(global.page)
    await homePage.navigateToHome();
})
When('User clicks on "Cases" page',async () => {  
  const homePage = new HomePage(global.page)
  await homePage.navigateToCasesPage();
})
When('User clicks on the "About Us" link',async () => {  
  const homePage = new HomePage(global.page)
  await homePage.navigateToAboutUsPage();
})

When('User clicks on "Contact" page',async () => {  
  const homePage = new HomePage(global.page)
  await homePage.navigateToContactPage();
})

When('User clicks on "Jobs" page',async () => {  
  const homePage = new HomePage(global.page)
  await homePage.navigateToJobsPage();
})

When('User clicks on the "Solutions" link',async () => {  
  const homePage = new HomePage(global.page)
  await homePage.navigateToSolutionsPage();
})



Then('User should be redirected to the Cases page', async () => {
  const homePage = new HomePage(global.page)
  await homePage.assertForCasesPage();
})

Then('User should be redirected to the About Us page', async () => {
  const homePage = new HomePage(global.page)
  await homePage.assertForAboutUsPage();
})

Then('User should be redirected to the Contact page', async () => {
  const homePage = new HomePage(global.page)
  await homePage.assertForAboutUsPage();
})
Then('User should be redirected to the Jobs page', async () => {
  const homePage = new HomePage(global.page)
  await homePage.assertForAboutUsPage();
})
Then('User should be redirected to the Solutions page', async () => {
  const homePage = new HomePage(global.page)
  await homePage.assertForSolutionsPage();
})

Then('User should see the website logo', async () => {
  const homePage = new HomePage(global.page)
  await homePage.assertForLogoVisibility();
})




