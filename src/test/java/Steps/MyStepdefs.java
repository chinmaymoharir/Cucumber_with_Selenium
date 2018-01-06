package Steps;
import Base.BaseUtils;
import Pages.LoginPage;
import Transformation.EmailTransform;
import Transformation.SalaryCountTransformer;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.http.util.Asserts;
import org.openqa.selenium.*;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;


import java.util.ArrayList;
import java.util.List;

public class MyStepdefs extends BaseUtils{

    private BaseUtils base;

    public MyStepdefs(BaseUtils base) {
        this.base = base;
    }

    @Then("^I should see the userform page$")
        public void iShouldSeeTheUserPage() throws Throwable{
            // Write code here that turns the phrase abo)ve into concrete actions
        /*System.out.println("The driver is " +base.StepInfo);*/
        Assert.assertTrue(base.driver.findElement(By.xpath("//form[@id='details']/h2[contains(text(),'User Form')]")).isDisplayed(),"User form page is not displayed, thus not logged in successfully");
        System.out.println("I should see userform page");

        }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Chinmay\\Downloads\\chromedriver_win32\\chromedriver.exe");
        base.driver = new ChromeDriver();
        base.driver.get("http://www.executeautomation.com/demosite/Login.html");
        System.out.println("Execute I navigate to the login page");

    }

    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        LoginPage page = new LoginPage(base.driver);
        page.clickLogin();
    }

 /*   @And("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iEnterTheUsernameAsAndPasswordAs(String username, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Username is " +username + " and password is "+password);
    }
*/
    @And("^I enter the following for Login$")
    public void iEnterTheFollowingForLogin(DataTable table) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        List<List<String>> data=table.raw();
        /*System.out.println("The value is : "+data.get(0).get(0).toString());
        System.out.println("The value is : "+data.get(0).get(1).toString());*/

        //create arraylist
        List<User> users  = new ArrayList<User>();
        //store users
        users=table.asList(User.class);

        LoginPage page = new LoginPage(base.driver);

        for (User user: users) {
            page.Login(user.username, user.password);
        }
    }

    @And("^I enter ([^\"]*) and ([^\"]*)$")
    public void iEnterUsernameAndPassword(String userName, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Username is: " +userName);
        System.out.println("Password is: " +password);
    }

    @And("^I enter the user email address as Email:([^\"]*)$")
    public void iEnterTheUserEmailAddressAsEmailAdmin(@Transform(EmailTransform.class) String email) throws Throwable {
        System.out.println("The email address is " +email);

    }

    @And("^I verify the account of my salary digits for Rs (\\d+)$")
    public void iVerifyTheAccountOfMySalaryDigitsForRs(@Transform(SalaryCountTransformer.class) int salary) throws Throwable {
        System.out.println("My salary digit count is " +salary);
    }

    @Then("^I should see the userform page incorrect$")
    public void iShouldSeeTheUserformPageIncorrect() throws Throwable {
        Assert.assertTrue(base.driver.findElement(By.id("sahbdja")).isDisplayed(),"It is not displayed");
    }

    public class User
    {
        public String username;
        public String password;

        public User(String userName, String passWord) {
            username = userName;
            password = passWord;
        }
    }
}

