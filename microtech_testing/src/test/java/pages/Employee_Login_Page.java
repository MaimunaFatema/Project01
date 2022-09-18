package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_Login_Page extends Base {
	By login_menu = By.xpath("//ul[@id='navli']/li[4]/a");
	By login_page_text=By.xpath("//div[2]/h1");
	By emailId= By.name("mailuid");
	By empPassword= By.name("pwd");
	By login_button=By.name("login-submit");
	By welcome_text= By.xpath("//div[@id='divimg']/div/h2[2]");
	
	
	public void clickOn_Login_Menu() {
		click(login_menu);
	}
	public String emp_login_page() {
		String login_Page_Text=getText(login_page_text);
		return login_Page_Text;
	}
	public void enterEmail(String email) {
		sendKeys(emailId,email);
	}
	public void enterPwd(String password) {
		sendKeys(empPassword,password);
	}
	public void clickOn_Login_Button() {
		click(login_button);
	}
	public String verifyWelcome_text() {
		String welcomeText=getText(welcome_text);
		return welcomeText;
	}
	
}
