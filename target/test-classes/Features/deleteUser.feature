@Test
Feature: Test the Update User

Scenario Outline: Test updated user
	Given the api is up and running
	Then I delete a given user <id> and verify its status code and other details
	
	Examples:
	|id	|
	|2	|
	|10	|
