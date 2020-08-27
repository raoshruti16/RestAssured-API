package Reqres;

//import org.json.simple.JSONObject;
import org.json.JSONObject;
public class ResponseBean {
	private static ResponseBean responseBeans;
	
	//Page1
	private static JSONObject response;
	
	public static void setResponse(JSONObject response) {
		if(responseBeans == null) {
			NullBean();
		}
		responseBeans.response= response;
	}

	private static void NullBean() {
		if(responseBeans == null) {
			responseBeans= new ResponseBean();
		}	
	}
	
	public static JSONObject getResponse() {
		if(responseBeans == null) {
			NullBean();
		}
		return responseBeans.response;
	}

	
	//Page2
	private JSONObject responsePg2;
	
	
	public static void setResponsePg2(JSONObject response) {
		if(responseBeans == null) {
			NullBeanPg2();
		}
		responseBeans.responsePg2= response;
	}

	private static void NullBeanPg2() {
		if(responseBeans == null) {
			responseBeans= new ResponseBean();
		}
		
	}
	
	public static JSONObject getResponsePg2() {
		if(responseBeans == null) {
			NullBeanPg2();
		}
		return responseBeans.responsePg2;
	}
}
