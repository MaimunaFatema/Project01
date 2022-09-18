package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import pages.Page_Landing;

public class LandingPage_Logo extends Base {
	Page_Landing page_Landing = new Page_Landing();

	@Given("I am in Landing page")
	public void i_am_in_Landing_page() {
		getUrl("https://sit.skyschooling.com/microtech/index.html");
		boolean b = page_Landing.welcome_message_verify();
		assertEquals(true, b);
	}

	@And("Verify landing page logo is visible")
	public void verify_landing_page_logo_is_visible() {
		String s = page_Landing.verify_Landing_page_logo();
		assertEquals("MicroTech NA", s);
	}
}
