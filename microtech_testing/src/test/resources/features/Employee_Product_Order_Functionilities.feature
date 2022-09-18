Feature: Employee Order Functionilities
  I want to use this template for my feature file

  Scenario: Employee order functions
   Given I am in Landing page
    When I click on login menu
    Then I will see employee login page "Employee Login"
    Then I will enter employee user ID "testpilot@gmail.com"
    And I will enter password "1234"
    When I click Employee login button
    Then I will see Employee home page "Welcome Test"
    And I will click Order List button
		Then I will see Order List Page "Employee Id: 102"
		And I click Order Product menu
		Then I will see Product Order page "Order Product"
		And I Select Product Name
		And I Enter Order Date "9/7/2022"
		When I click Order Product button
		Then I will see Order List Page "Employee Id: 102"
		And I click on Confirm button
		And I will refresh page
		Then I will see Status "Confirmed"

   


