package base;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Base {
public static WebDriver driver;
public static String name;
	
	public static void getUrl(String url) {
		driver.get(url);
	}
	public static void click(By by) {
		driver.findElement(by).click();
	}
	public static void sendKeys(By by,String value) {
		driver.findElement(by).sendKeys(value);
	}
	public static String getText(By by) {
		String text= driver.findElement(by).getText();
		return text;
	}
	public static boolean isDisplayed(By by) {
		boolean b= driver.findElement(by).isDisplayed();
		return b;
	}
}
