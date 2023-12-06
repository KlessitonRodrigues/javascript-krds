from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
import random

driver = webdriver.Chrome()

driver.get('https://www.instagram.com/')

sleep(2)

username_input = driver.find_element(By.CSS_SELECTOR, "input[name='username']")
username_input.send_keys('EMAIL')
sleep(2)

password_input = driver.find_element(By.CSS_SELECTOR, "input[name='password']")
password_input.send_keys('SENHA')
sleep(2)

login_link = driver.find_element(By.XPATH, "//parent::div[text()='Log in']")

login_link.click()

sleep(5)# driver.close()

all_cookies= driver.get_cookies();
cookies_dict = {}
for cookie in all_cookies:
    cookies_dict[cookie['name']] = cookie['value']

cookiesString = f'ig_did={cookies_dict["ig_did"]}; ig_nrcb=1; mid={cookies_dict["mid"]}; ig_did={cookies_dict["ig_did"]};csrftoken={cookies_dict["csrftoken"]}; ds_user_id={cookies_dict["ds_user_id"]}; sessionid={cookies_dict["sessionid"]}; rur="{cookies_dict["rur"]}"'