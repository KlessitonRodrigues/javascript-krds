import selenium, { By } from "selenium-webdriver";

const sleep = (t: number) => new Promise((res) => setTimeout(res, t));

const injectQueryListener = async () => {
  return new Promise((res) => {
    const send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (data) {
      if (data?.toString().includes("&variables=")) {
        const str = data.toString();
        res(str.split("&variables=")[0]);
      }
      send.call(this, data);
    };
  });
};

const run = async () => {
  const driver = new selenium.Builder().forBrowser("chrome").build();
  await driver.get("https://www.instagram.com/");
  await sleep(2000);

  const userInput = driver.findElement(By.css("input[name='username']"));
  await userInput.sendKeys("klessiton.silva@westpoint.io");
  await sleep(2000);

  const passInput = driver.findElement(By.css("input[name='password']"));
  await passInput.sendKeys("Pass#12345");
  await sleep(2000);

  const loginBtnXPath = "//parent::div[text()='Log in']";
  const loginBtn = driver.findElement(By.xpath(loginBtnXPath));
  await loginBtn.click();
  await sleep(5000);

  const cookiesArr = await driver.manage().getCookies();
  const cookies: any = {};
  cookiesArr.forEach(({ name, value }) => (cookies[name] = value));

  const queryCookies = [
    `ig_nrcb=1;`,
    `ig_did=${cookies["ig_did"]};`,
    `mid=${cookies["mid"]};`,
    `ds_user_id=${cookies["ds_user_id"]};`,
    `datr=${cookies["datr"]};`,
    `csrftoken=${cookies["csrftoken"]};`,
    `sessionid=${cookies["sessionid"]};`,
    `rur=${cookies["rur"]};`,
  ].join(" ");

  const queryTokens = await driver.executeScript(injectQueryListener);

  return { queryTokens, queryCookies };
};

run().catch(console.error);

// 'ig_did={cookies_dict["ig_did"]}; ig_nrcb=1; mid={cookies_dict["mid"]}; ig_did={cookies_dict["ig_did"]};csrftoken={cookies_dict["csrftoken"]}; ds_user_id={cookies_dict["ds_user_id"]}; sessionid={cookies_dict["sessionid"]}; rur="{cookies_dict["rur"]}"'
