Feature: Website Navigation and User Registration

  @functional
  Scenario: Navigate to Home Page
    Given User is on the website home page
    Then User should see the website logo

  @functional
  Scenario: Navigate to Solutions Page
    Given User is on the website home page
    When User clicks on the "Solutions" link
    Then User should be redirected to the Solutions page

  @functional
  Scenario: Navigate to Cases Page
    Given User is on the website home page
    When User clicks on the "Cases" link
    Then User should be redirected to the Cases page

  @functional
  Scenario: Navigate to About Us Page
    Given User is on the website home page
    When User clicks on the "About Us" link
    Then User should be redirected to the About Us page

  @functional
  Scenario: Navigate to Contact Page
    Given User is on the website home page
    When User clicks on "Contact" page
    Then User should be redirected to the Contact page

  @functional
  Scenario: Navigate to Jobs Page
    Given User is on the website home page
    When User click on  "Jobs" page
    Then User should be redirected to the Jobs page
