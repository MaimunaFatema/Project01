package pages;

import org.openqa.selenium.By;

import base.Base;

public class Page_Landing extends Base{
	By welcomeText =By.xpath("//div/h1");
	By logo=By.xpath("//nav/h1");
	By aboutUs_Menu = By.xpath("//li[2]/a");
	public boolean welcome_message_verify() {
		boolean b= isDisplayed(welcomeText);
		return b;
	}
	public String verify_Landing_page_logo() {
		String s= getText(logo);
		return s;
	}
	
	public boolean verify_aboutUs_menu() {
		boolean b = isDisplayed(aboutUs_Menu);
		return b;
	}
}
