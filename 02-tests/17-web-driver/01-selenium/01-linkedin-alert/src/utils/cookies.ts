export const getAllCookies = function () {
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    // @ts-ignore
    cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
  }
  return cookies;
};

const cookies = {
  bcookie: '"v=2&795cc426-96a2-4dd6-8232-b34ac8913b50"',
  g_state: '{"i_l":0}',
  liap: "true",
  JSESSIONID: '"ajax:4684520783545910825"',
  lang: "v=2&lang=pt-br",
  lidc: '"b=VB07:s=V:r=V:a=V:p=V:g=4865:u=194:x=1:i=1712619763:t=1712704769:v=2:sig=AQFdNuCpi7cWDLYvoVXj-fG-Y5ItJsXd"',
  timezone: "America/Fortaleza",
  li_theme: "light",
  li_theme_set: "app",
  UserMatchHistory:
    "AQKHGQSIi86kzAAAAY7AF-Y_gk73X8t_LsuMqamosCx9FKhoyWRtD7Vo3iC26DMIRROhgGj7LSE-6hY8HFeQk8XZR8WMPYb0RXx7voPv4BjntHPreYqEMLjKGom1MsUsT5VQy-Rxtu4s-caaQlIqEJIsenqutplihW5COWpQFC79DHI8oTV7B_Fu-Xow6ewKYvCcny5qYKnAYeuOMhBRUj9ZwwZ9Rod5GGjLVQrYsswbx6AEdQOQbEjf3YHWf9WbBFRv0-cSlypYA4HWS1DabQikzwPbmXYpzujw-CCLMA",
};

/*
Object.entries(cookies).forEach(([name, value]) =>
  page.addCookie({ name, value })
);

Object.entries(cookies).forEach(([name, value]) =>
  page.addCookie({ name, value })
);


 "https://www.linkedin.com"
 "https://merchantpool1.linkedin.com"
*/
