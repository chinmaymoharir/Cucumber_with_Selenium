$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13105466316,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#This feature deals with the login functionality of the application"
    }
  ],
  "line": 3,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 12232023762,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 1661462366,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickLoginButton()"
});
formatter.result({
  "duration": 865772769,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeTheUserPage()"
});
formatter.result({
  "duration": 180138827,
  "status": "passed"
});
formatter.after({
  "duration": 305334,
  "status": "passed"
});
formatter.before({
  "duration": 5139848124,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login with incorrect username and password",
  "description": "",
  "id": "loginfeature;login-with-incorrect-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the userform page incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 9161355255,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 704740182,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickLoginButton()"
});
formatter.result({
  "duration": 688105500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeTheUserformPageIncorrect()"
});
formatter.result({
  "duration": 85909854,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"sahbdja\"}\n  (Session info: chrome\u003d63.0.3239.84)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027DESKTOP-ONN44VL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\Chinmay\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 63.0.3239.84, webStorageEnabled: true}\nSession ID: fdebfa37d6cf8db057811d9057133e40\n*** Element info: {Using\u003did, value\u003dsahbdja}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat Steps.MyStepdefs.iShouldSeeTheUserformPageIncorrect(MyStepdefs.java:101)\r\n\tat ✽.Then I should see the userform page incorrect(login.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 274667,
  "status": "passed"
});
});