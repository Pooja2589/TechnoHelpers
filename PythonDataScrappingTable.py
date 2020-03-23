import pandas as pd
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
// driver path
driver = webdriver.Chrome("C:/java32bit/chromedriver_win32/chromedriver")
projects=[] #List to store name of the product
projecttypes=[] #List to store price of the product
titles=[] #List to store rating of the product
lastvisits=[] #List to store rating of the product
accesslevels=[] #List to store rating of the product
// website name
driver.get("https:///")
content = driver.page_source
soup = BeautifulSoup(content)
wait = WebDriverWait(driver, 120)
myElem = wait.until(lambda driver: driver.find_element_by_id("login-username"))
print ("Page is ready!")
//username
driver.find_element_by_id("login-username").send_keys("ng")
driver.find_element_by_xpath('//button[@class="btn right"]').click()
myElem = wait.until(lambda driver: driver.find_element_by_id("login-password-input"))
print ("Page is ready1!")
//password
driver.find_element_by_id("login-password-input").send_keys("ng")
driver.find_element_by_id("login-password-continue").click()
myElem = wait.until(lambda driver: driver.find_element_by_id("login-2fa"))
print ("Page is ready2!")
//2fa account manual entry
time.sleep(20)
driver.find_element_by_id("login-2fa-continue").click()
//dummy page
driver.get('file:///C:/Users/NikhilGovind/Desktop/a1.html')
myElem = wait.until(lambda driver: driver.find_element_by_id("somekeyid"))
print ("Page is ready3!")
content = driver.page_source
soup = BeautifulSoup(content)
//iterate the table
for a in soup.findAll('span', attrs={'class':'gwt-InlineLabel pa-clickable'}):
  name=a
  projects.append(name.text)
//excel sheet
df = pd.DataFrame({'Project':projects})
//excel sheet path
df.to_csv('C:/Users/NGovind/Desktop/products.csv', index=False, encoding='utf-8')