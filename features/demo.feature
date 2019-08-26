Feature: I am going to validate my Calculator functionality

@calculatortesting
  Scenario Outline: Calculator Add functionality testing

    Given I will navigate to "calc" page
    When I add two numbers "<key1>" and "<key2>"
    Then the output displayed should be "<key3>"

    Examples:
      |key1|key2|key3|
      |  3  |  5  | 8   |
      |  2  |  6  | 7   |

  @AngularTesting
  Scenario Outline: Scenario: Calculator Add functionality testing

    Given I will navigate to "AngularJs" page
    When I clicked on header link
    And you will navigate to angular page
    Then you will enter "<key>" in search box

    Examples:
    |key |
    |hello|
    |hey|
