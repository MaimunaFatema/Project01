package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Employee_Login_Page;

public class Employee_Login_Functionilities extends Base {
	Employee_Login_Page employee_Login_Page=new Employee_Login_Page();
	@When("I click on login menu")
	public void i_click_on_login_menu() {
		employee_Login_Page.clickOn_Login_Menu();
	}

	@Then("I will see employee login page {string}")
	public void i_will_see_employee_login_page(String expectedText) {
	    String actualText=employee_Login_Page.emp_login_page();
	    assertEquals(actualText,expectedText);
	}

	@Then("I will enter employee user ID {string}")
	public void i_will_enter_employee_user_ID(String email) {
		employee_Login_Page.enterEmail(email);
	}

	@And("I will enter password {string}")
	public void i_will_enter_password(String password) {
		employee_Login_Page.enterPwd(password);
	}

	@When("I click Employee login button")
	public void i_click_Employee_login_button() {
		employee_Login_Page.clickOn_Login_Button();
	}

	@Then("I will see Employee home page {string}")
	public void i_will_see_Employee_home_page(String expectedText) {
		String actualText=employee_Login_Page.verifyWelcome_text();
	    assertEquals(actualText,expectedText);
	}
}
