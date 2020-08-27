@Test
Feature: Test the User count

Scenario: Test the number of users
	Given the api is up and running
	And I count the number of users
	Then I verify the number of users
