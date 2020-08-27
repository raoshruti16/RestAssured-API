package Reqres;
import org.json.JSONArray;
import org.json.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.sun.xml.xsom.impl.scd.Iterators.Map;

import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;

import static io.restassured.matcher.RestAssuredMatchers.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ListUser {

	@Given("^the api is up and running$")
	public void the_api_is_up_and_running() throws Throwable{
		System.out.println(GetHelper.getUser());
		System.out.println(GetHelper.getUserPage2());
	}
	
	@And("^I count the number of users$")
	public void I_count_the_number_of_users() throws Throwable{
		JSONObject response1 = ResponseBean.getResponse();
		int count1 = response1.getJSONArray("data").length();
		System.out.println("Users in page 1 are " + count1);
		JSONObject response2 = ResponseBean.getResponsePg2();
		int count2 = response2.getJSONArray("data").length();
		System.out.println("Users in page 2 are " + count2);
		int userCount = response1.getInt("total");
		Assert.assertEquals((count1+count2), userCount);
	}
	
	@Then("^I verify the number of users$")
	public void I_verify_the_number_of_users() throws Throwable{
		JSONObject response = ResponseBean.getResponse();
		int userCount = response.getInt("total");
		Assert.assertEquals(userCount, 12);
	}
}
