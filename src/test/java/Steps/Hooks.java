package Steps;

import Base.BaseUtils;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hooks extends BaseUtils{
    private BaseUtils  base;

    public Hooks(BaseUtils base) {
        this.base = base;
    }

    @Before
    public void InitializeTest() {
        System.out.println("Opening the browser : Chrome");
        //passing a dummy webdriver instance
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Chinmay\\Downloads\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @After
    public void TearDownTest(Scenario scenario) {
        if(scenario.isFailed()){
            //take screenshot code
            //....
            System.out.println(scenario.getName());
        }

        System.out.println("Closing the browser : MOCK");
    }
}
