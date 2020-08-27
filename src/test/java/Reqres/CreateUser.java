package Reqres;

import org.json.simple.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.sun.xml.xsom.impl.scd.Iterators.Map;

import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;

import static io.restassured.matcher.RestAssuredMatchers.*;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.path.json.JsonPath;

public class CreateUser {
	@Then("^I create a new user (.*) and (.*) and verify its status code and other details$")
	public void I_create_a_new_user_and_verify_its_status_code(String name, String job) throws Throwable{
//		HashMap<String, Object> map = new HashMap<String,Object>();
//		map.put("name",name);
//		map.put("job",job);
//		JSONObject request = new JSONObject(map);
//		System.out.println(request);	
//
//		given()
//			.header("Content-Type","application/json").contentType(ContentType.JSON).
//			accept(ContentType.JSON).body(request.toJSONString()).
//		when()
//			.post("https://reqres.in/api/users").
//		then()
//			.statusCode(201);	
		

		RequestSpecification request = RestAssured.given();
		JSONObject requestParams = new JSONObject();
		requestParams.put("name", name); 
		requestParams.put("job", job);
		System.out.println(requestParams);
		request.header("Content-Type", "application/json");
		request.body(requestParams.toJSONString());
		Response response = request.post("https://reqres.in/api/users");
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 201);
		
		JsonPath jsonPathEvaluator = response.jsonPath();
		String id = jsonPathEvaluator.get("id");
		System.out.println("Id of created User is " + id);
		
		String createdAt = jsonPathEvaluator.get("createdAt");
		System.out.println("User is created at " + createdAt);
		
		String createdName = jsonPathEvaluator.get("name");
		Assert.assertEquals(createdName, name, "Correct name received in the Response");
		
		String createdJob = jsonPathEvaluator.get("job");
		Assert.assertEquals(createdJob, job, "Correct job received in the Response");

	}
}
