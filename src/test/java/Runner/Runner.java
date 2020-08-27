package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features", glue= {"Reqres"}, tags= {"@Test"},
plugin = { "pretty","html:target/cucumber-reports.html", "json:target/test-report/cucumber.json"},
monochrome = true)

public class Runner 
{
	
}