package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Employee_Orderlist_Page;

public class Employee_Orderlist_Functionilities extends Base{
	Employee_Orderlist_Page employee_Orderlist_Page=new Employee_Orderlist_Page();
	@And("I will click Order List button")
	public void i_will_click_Order_List_button() {
		employee_Orderlist_Page.click_orderlist_button();
	}
	@Then("I will see Order List Page {string}")
	public void i_will_see_Order_List_Page(String expectedText) {
	String actualText= employee_Orderlist_Page.orderList_text();
	 assertEquals(actualText,expectedText);
	}

	@And("I click Order Product menu")
	public void i_click_Order_Product_menu() {
		employee_Orderlist_Page.click_orderProduct_Menu();
	}

	@Then("I will see Product Order page {string}")
	public void i_will_see_Product_Order_page(String string) {
		employee_Orderlist_Page.product_orderPage_Text();
	}

	@And("I Select Product Name")
	public void i_Select_Product_Name() {
		employee_Orderlist_Page.selectProduct();
	}

	@And("I Enter Order Date {string}")
	public void i_Enter_Order_Date(String date) {
		employee_Orderlist_Page.enterDate(date);
	}

	@When("I click Order Product button")
	public void i_click_Order_Product_button() {
		employee_Orderlist_Page.orderProduct_Button();
	}

	@And("I click on Confirm button")
	public void i_click_on_Confirm_button() {
		employee_Orderlist_Page.click_confirmButton();
	}

	@And("I will refresh page")
	public void i_will_refresh_page() {
		driver.navigate().refresh();
	}

	@Then("I will see Status {string}")
	public void i_will_see_Status(String expectedText) {
	String actualText=employee_Orderlist_Page.confirmed_Text();
	assertEquals(actualText,expectedText);
	}

}
