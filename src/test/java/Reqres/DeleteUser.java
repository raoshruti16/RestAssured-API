package Reqres;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;

import java.util.HashMap;
import org.testng.Assert;

import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.JSONArray;
import org.json.JSONObject;
import org.testng.annotations.Test;

import com.sun.xml.xsom.impl.scd.Iterators.Map;

import static io.restassured.RestAssured.*;

import static org.hamcrest.Matchers.*;


import static io.restassured.matcher.RestAssuredMatchers.*;
public class DeleteUser {
	@Then("^I delete a given user (.*) and verify its status code and other details$")
	public void I_delete_a_given_user_and_verify_its_status_code(int empid) throws Throwable{
//		when().delete("https://reqres.in/api/users/" +empid)
//		.then().statusCode(204);	
		
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		Response response = request.delete("https://reqres.in/api/users/" + empid);
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 204);
		//String jsonString =response.asString();
		Assert.assertTrue(response.asString().isEmpty());
		
	}
}
