package Reqres;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.testng.Assert;

import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;
public class UpdateUser {
	
	@Then("^I update a given user (.*) with (.*) and (.*) and verify its status code and other details$")
	public void I_update_a_given_user_and_verify_its_status_code(int empid, String newName, String newJob) throws Throwable{
//		HashMap<String, Object> map = new HashMap<String,Object>();
//		map.put("name",newName);
//		map.put("job",newJob;
//		JSONObject request = new JSONObject(map);
//		System.out.println(request);	
//
//		given()
//			.header("Content-Type","application/json").contentType(ContentType.JSON).
//			accept(ContentType.JSON).body(request.toJSONString()).
//		when()
//			.put("https://reqres.in/api/users/"+empid).
//		then()
//			.statusCode(200);	
		
		RequestSpecification request = RestAssured.given();
		JSONObject requestParams = new JSONObject();
		requestParams.put("name", newName); 
		requestParams.put("job", newJob);
		System.out.println(requestParams);
		request.header("Content-Type", "application/json");
		request.body(requestParams.toString());
		Response response = request.put("https://reqres.in/api/users/" +empid);
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
		
		JsonPath jsonPathEvaluator = response.jsonPath();
		String updatedAt = jsonPathEvaluator.get("updatedAt");
		System.out.println("User is created at " + updatedAt);
		
		String createdName = jsonPathEvaluator.get("name");
		Assert.assertEquals(createdName, newName, "Correct name received in the Response");
		
		String createdJob = jsonPathEvaluator.get("job");
		Assert.assertEquals(createdJob, newJob, "Correct job received in the Response");
	}
}
