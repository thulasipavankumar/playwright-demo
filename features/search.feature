Feature: Website Navigation and User Registration

  Scenario: Navigate to Home Page
    Given User is on the website home page
    Then User should see the website logo

  Scenario: Navigate to Solutions Page
    Given User is on the website home page
    When User clicks on the "Solutions" link
    Then User should be redirected to the Solutions page

  Scenario: Navigate to Cases Page
    Given User is on the website home page
    When User clicks on the "Cases" link
    Then User should be redirected to the Cases page

   Scenario: Navigate to About Us Page
    Given User is on the website home page
    When User clicks on the "About Us" link
    Then User should be redirected to the About Us page

  Scenario: Navigate to Contact Page
    Given User is on the website home page
    When User clicks on "Contact" page
    Then User should be redirected to the Contact page
  
  Scenario: Navigate to Jobs Page
    Given User is on the website home page
    When User Navicates to "Jobs" page
    Then User should be redirected to the Jobs page

