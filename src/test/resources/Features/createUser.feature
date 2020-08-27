@Test
Feature: Test the Create User

Scenario Outline: Test created user
	Given the api is up and running
	Then I create a new user <name> and <job> and verify its status code and other details
	
	Examples:
	|name		|job		|
	|Shruti		|Engineer	|
	|Shreya002	|Student02	|