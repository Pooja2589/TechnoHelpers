# Karate

* Karate is a open-source tool to combine API test-automation, mocks, performance-testing and even UI automation into a single, unified framework. 
The BDD syntax popularized by Cucumber is language-neutral, and easy for even non-programmers. 
Powerful JSON & XML assertions are built-in, and you can run tests in parallel for speed.

* Test execution and report generation is easy. The stand-alone executable for teams not comfortable with Java. You don't have to compile code. 
Just write tests in a simple, readable syntax - carefully designed for HTTP, JSON, GraphQL and XML. 
And you can mix API and UI test-automation within the same test script.

## Setup
* Eclipse / STS / Visual Studio
* JAVA / Maven
* Standalone mode will need only java

## Example
* Sample code and test sceario file is attached for GET / POST and JSON / XML 
* Standalone can be used as from command prompt in windows as: karate src/demo/web/google.feature
* The setup is very simple. Just download either the standalone or the sample code, change the data and start the testing
  * Run the TestRunner.java as JUnit Test and open the last line of the console output ( the report )
  * Sample output files
  ![Alt text](https://github.com/Pooja2589/TechnoHelpers/blob/master/karate/Sample_screenshot.jpg)

## Performance Load Testing
 * Scala file is required to trigger the testsuite with the setup
 * Different scenarios static / dynamic parameter can be injected with ramp up / ramp down 
 * Run the test using the command:
   * mvn clean test-compile gatling:test
 * Output
 ![Alt text](https://github.com/Pooja2589/TechnoHelpers/blob/master/karate/Sample_screenshot_perf.jpg)

## Reference
* https://intuit.github.io/karate/
