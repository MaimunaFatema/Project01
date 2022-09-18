package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_Orderlist_Page extends Base {
	By order_list_menu = By.xpath("//li[5]/a");
	By order_list_page = By.xpath("//h2");
	By order_product_menu=By.xpath("//li[2]/a");
	By order_product_Text= By.xpath("//div[2]/h2");
	By select_product=By.xpath("//select[@name='prodId']");
	By enter_date =By.xpath("//input[@name='ordDate']");
	By order_Button= By.xpath("//div[3]/button");
	By confirm_Button=By.xpath("//tr[105]/td[7]/a");
	By confirm_Status=By.xpath("//tr[105]/td[6]");
	public void click_orderlist_button() {
		click(order_list_menu);
	}
	public String orderList_text() {
		String text=getText(order_list_page);
		return text;
	}
	public void click_orderProduct_Menu() {
		click(order_product_menu);
	}
	public String product_orderPage_Text() {
		String text=getText(order_product_Text);
		return text;
	}
	public void selectProduct() {
		sendKeys(select_product,"Laptop");
	}
	public void enterDate(String date) {
		sendKeys(enter_date,date);
	}
	public void orderProduct_Button() {
		click(order_Button);
	}
	public void click_confirmButton() {
		click(confirm_Button);
	}
	public String confirmed_Text() {
		String text=getText(confirm_Status);
		return text;
	}
}
