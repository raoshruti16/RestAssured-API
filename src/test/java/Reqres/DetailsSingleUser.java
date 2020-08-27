package Reqres;

import static org.hamcrest.Matchers.equalTo;

import org.json.JSONObject;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static org.hamcrest.Matchers.*;
import org.testng.annotations.Test;
import com.sun.xml.xsom.impl.scd.Iterators.Map;
import static io.restassured.RestAssured.*;
import java.util.HashMap;

import static io.restassured.matcher.RestAssuredMatchers.*;


public class DetailsSingleUser {
	
	@And("^I check if (.*) is present$")
	public void I_check_if_name_is_present(String fname) throws Throwable{	
		Boolean flag = false;
		RequestSpecification httpRequest2 = RestAssured.given();
		Response responsePg2 = httpRequest2.request(Method.GET, "https://reqres.in/api/users?page=2");
		String responseBody2 = responsePg2.getBody().asString();
		
		RequestSpecification httpRequest1 = RestAssured.given();
		Response responsePg1 = httpRequest1.request(Method.GET, "https://reqres.in/api/users");
		String responseBody1 = responsePg1.getBody().asString();
	
		if(responseBody1.contains(fname) || responseBody2.contains(fname)){
			flag = true;
		}
		Assert.assertTrue(flag==true); 
	}
	
	
	@Then("^I get the details of the (.*) user$")
	public void I_get_the_details_of_the_name(String fname) throws Throwable{
		JSONObject response1 = ResponseBean.getResponse();
		for(int i=0; i<6;i++) {
			JSONObject userPg1 =response1.getJSONArray("data").getJSONObject(i);
			String expectedPg1 = userPg1.getString("first_name");
			if(expectedPg1.equals(fname)){
				System.out.println(userPg1);
				System.out.println("ID of the user is " +userPg1.getInt("id"));
				System.out.println("Email of the user is " +userPg1.getString("email"));
				System.out.println("First name of the user is " +userPg1.getString("first_name"));
				System.out.println("Last name of the user is " +userPg1.getString("last_name"));
				System.out.println("Avatar of the user is " +userPg1.getString("avatar"));
			}
		JSONObject response2 = ResponseBean.getResponsePg2();
		for(int j=0; j<6;j++) {
			JSONObject userPg2 =response2.getJSONArray("data").getJSONObject(j);
			String expectedPg2 = userPg2.getString("first_name");
			if(expectedPg2.equals(fname)){
				System.out.println(userPg2);
				System.out.println("ID of the user is " +userPg2.getInt("id"));
				System.out.println("Email of the user is " +userPg2.getString("email"));
				System.out.println("First name of the user is " +userPg2.getString("first_name"));
				System.out.println("Last name of the user is " +userPg2.getString("last_name"));
				System.out.println("Avatar of the user is " +userPg2.getString("avatar"));
			}
		}
	}
}
}