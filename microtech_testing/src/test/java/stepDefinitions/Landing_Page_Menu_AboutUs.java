package stepDefinitions;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.And;
import pages.Page_Landing;

public class Landing_Page_Menu_AboutUs {
	Page_Landing page_Landing = new Page_Landing();

	@And("Verify in landing page about us is present")
	public void verify_in_landing_page_about_us_is_present() {
		boolean b = page_Landing.verify_aboutUs_menu();
		assertEquals(true, b);
	}
}
