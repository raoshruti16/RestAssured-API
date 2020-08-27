package Reqres;

import static io.restassured.RestAssured.given;

import org.json.JSONObject;

import io.restassured.response.Response;

public class GetHelper {
	private static String errorMessage = null;
		public static JSONObject getUser() throws Exception {
			Response response = given().when().get("https://reqres.in/api/users");
			if(response.statusCode() != 200) {
				errorMessage = response.then().extract().asString();
				throw new Exception("Service to get access token is not working" + errorMessage);
			}
			ResponseBean.setResponse(new JSONObject(response.asString()));
			return new JSONObject(response.asString());
		}
		
		public static JSONObject getUserPage2() throws Exception {
			Response response = given().when().get("https://reqres.in/api/users?page=2");
			if(response.statusCode() != 200) {
				errorMessage = response.then().extract().asString();
				throw new Exception("Service to get access token is not working" + errorMessage);
			}
			ResponseBean.setResponsePg2(new JSONObject(response.asString()));
			return new JSONObject(response.asString());
		}
}
