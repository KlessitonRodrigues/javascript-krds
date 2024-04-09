import { Browser, Builder, By } from "selenium-webdriver";

const run = async () => {
  const driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("https://www.linkedin.com/");

  const nameInput = await driver.findElement(By.id("session_key"));
  const passInput = await driver.findElement(By.id("session_password"));
  const loginBtn = await driver.findElement(By.css('button[type="submit"]'));

  await nameInput.click();
  await passInput.click();

  await nameInput.sendKeys("klessitonrds@gmail.com");
  await passInput.sendKeys("mengo99KRDS99");
  await loginBtn.click();

  const page = await driver.manage();

  await driver.get("https://www.linkedin.com/feed/");
};

run().catch(console.error);
