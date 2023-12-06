const getAuthenticationCookies = async () => {
  return fetch("https://www.instagram.com/api/v1/web/accounts/login/ajax/", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      dpr: "0.9",
      "sec-ch-prefers-color-scheme": "light",
      "sec-ch-ua": '"Chromium";v="119", "Not?A_Brand";v="24"',
      "sec-ch-ua-full-version-list":
        '"Chromium";v="119.0.6045.159", "Not?A_Brand";v="24.0.0.0"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": '""',
      "sec-ch-ua-platform": '"Linux"',
      "sec-ch-ua-platform-version": '"5.15.0"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "viewport-width": "1464",
      "x-asbd-id": "129477",
      "x-csrftoken": "MNUoVtLJRB2XWX8soriFSmmWuM9EjmOj",
      "x-ig-app-id": "936619743392459",
      "x-ig-www-claim": "0",
      "x-instagram-ajax": "1010044827",
      "x-requested-with": "XMLHttpRequest",
      Referer: "https://www.instagram.com/accounts/login/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      Origin: "http://www.instagram.com",
    },
    body: "enc_password=%23PWD_INSTAGRAM_BROWSER%3A10%3A1701131278%3AAftQADLxqplRfmbwNqGeIJ9Fzw3I7srEzJAEPXvkj1UyZ8hZJ0xHTzhP6dEx37RirfOzVXrY1%2BHcmogApc75IYpRjoE56%2F3wWomdNPIBIUJiVgztC0SjSoEXZUOSHo3Nz2OyT2sW2jolISNR0SQ%3D&optIntoOneTap=false&queryParams=%7B%7D&trustedDeviceRecords=%7B%7D&username=kless_123_",
    method: "POST",
  }).then((res) => {
    const cookiesArr = res.headers.get("set-cookie")?.split(";");
    const sessionid =
      cookiesArr
        ?.find((text) => text.includes("sessionid="))
        ?.replace(" Secure, sessionid=", "") || "";

    const rur =
      cookiesArr
        ?.find((text) => text.includes("rur="))
        ?.replace(" Secure, rur=", "") || "";

    return {
      sessionid,
      rur,
    };
  });
};

getAuthenticationCookies().catch(console.error);
