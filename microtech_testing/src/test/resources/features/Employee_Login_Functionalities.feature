Feature: EMPLOYEE Login Functionalities
  I want to use this template for my feature file
Scenario: Login as an Employee
    Given I am in Landing page
    When I click on login menu
    Then I will see employee login page "Employee Login"
    Then I will enter employee user ID "testpilot@gmail.com"
    And I will enter password "1234"
    When I click Employee login button
    Then I will see Employee home page "Welcome Test"
    

 
