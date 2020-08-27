@Test
Feature: Test the Update User

Scenario Outline: Test updated user
	Given the api is up and running
	Then I update a given user <id> with <newName> and <newJob> and verify its status code and other details

	Examples:
	|id	|newName| newJob	|
	|2	|Shruti | Engineer	|
	|11	|Shreya | Student	|
