@Test
Feature: Test the Single User Details
Scenario Outline: Test User Details 
	Given the api is up and running
	And I check if <name> is present
	Then I get the details of the <name> user
	
	Examples:
	|name	|
	|Michael|
	|Tobias	|
	|Eve	|