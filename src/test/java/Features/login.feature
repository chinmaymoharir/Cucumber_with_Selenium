Feature: LoginFeature
  #This feature deals with the login functionality of the application
  Scenario: Login with correct username and password
    Given I navigate to the login page
    And I enter the following for Login
      | username | password|
      | admin    | admin   |
    And I click login button
    Then I should see the userform page

  Scenario: Login with incorrect username and password
    Given I navigate to the login page
    And I enter the following for Login
      | username | password|
      | admin    | admin   |
    And I click login button
    Then I should see the userform page incorrect

#
#  Scenario Outline: Login with correct username and password using Scenario Outline
#    Given I navigate to the login page
#    And I enter <username> and <password>
#    And I click login button
#    Then I should see the userform page
#
#    Examples:
#      | username | password      |
#      | admin    | adminPassword |
#      | execute  | automation    |
#      | user     | password      |
#