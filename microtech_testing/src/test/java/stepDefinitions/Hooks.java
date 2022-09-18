package stepDefinitions;

import org.openqa.selenium.chrome.ChromeDriver;

import base.Base;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks extends Base {
	@Before
	public static void driverSetup() {
		WebDriverManager.chromedriver().setup();
		driver =new ChromeDriver();
	}
	@After
	public static void tearDown() {
		driver.quit();
	}
}
