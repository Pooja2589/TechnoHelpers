Feature: 
    test of soap

Background:
* url 'http://www.dataaccess.com/webservicesserver/numberconversion.wso'

Scenario: soap 1.1
Given request
"""
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
   <soapenv:Header/>
   <soapenv:Body>
      <web:NumberToDollars>
         <web:dNum>10</web:dNum>
      </web:NumberToDollars>
   </soapenv:Body>
</soapenv:Envelope>
"""
When soap action 'Conversion'
Then status 200

* print '\n', response

#working
* match response /Envelope/Body/NumberToDollarsResponse/NumberToDollarsResult == 'ten dollars'

#not working
 * def temp = /Envelope/Body/NumberToDollarsResponse/NumberToDollarsResult
 * print temp