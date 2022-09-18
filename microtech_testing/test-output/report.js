$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Employee_Login_Functionalities.feature");
formatter.feature({
  "name": "EMPLOYEE Login Functionalities",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LandingPage_Logo.i_am_in_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see employee login page \"Employee Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_see_employee_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will enter employee user ID \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_enter_employee_user_ID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Employee login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_click_Employee_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee home page \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_see_Employee_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_Product_Order_Functionilities.feature");
formatter.feature({
  "name": "Employee Order Functionilities",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Employee order functions",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LandingPage_Logo.i_am_in_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see employee login page \"Employee Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_see_employee_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will enter employee user ID \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_enter_employee_user_ID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Employee login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_click_Employee_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee home page \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Login_Functionilities.i_will_see_Employee_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will click Order List button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_will_click_Order_List_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Order List Page \"Employee Id: 102\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_will_see_Order_List_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Order Product menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_click_Order_Product_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Product Order page \"Order Product\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_will_see_Product_Order_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Select Product Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_Select_Product_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Order Date \"9/7/2022\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_Enter_Order_Date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Order Product button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_click_Order_Product_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Order List Page \"Employee Id: 102\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_will_see_Order_List_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_click_on_Confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will refresh page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_will_refresh_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Status \"Confirmed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Orderlist_Functionilities.i_will_see_Status(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Landing_page_About_us.feature");
formatter.feature({
  "name": "Title of your fea",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LandingPage_Logo.i_am_in_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify in landing page about us is present",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Menu_AboutUs.verify_in_landing_page_about_us_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Verify_LandingPage_Logo_Display.feature");
formatter.feature({
  "name": "Landing Page logo",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify landing page logo is visible",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LandingPage_Logo.i_am_in_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify landing page logo is visible",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LandingPage_Logo.verify_landing_page_logo_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});