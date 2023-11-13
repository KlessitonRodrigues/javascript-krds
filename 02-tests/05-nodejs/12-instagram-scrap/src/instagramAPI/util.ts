export const instagramAPIIndentity =
  "av=17841462491818246&__d=www&__user=0&__a=1&__req=u&__hs=19660.HYP%3Ainstagram_web_pkg.2.1..0.1&dpr=1&__ccg=UNKNOWN&__rev=1009558901&__s=0mzqr4%3A29op64%3Am6xglw&__hsi=7295727609778605204&__dyn=7xeUmwlEnwn8K2WnFw9-2i5U4e1ZyUW3qi2K360CEbotw50x609vCwjE1xoswIwuo2awlU-cw5Mx62G3i1ywOwv89k2C1Fwc60AEC7U2czXwae4UaEW2G1NwwwNwKwHw8Xxm16wUwtEvU1aUbpEbUGdG1QwTwFwIw8O321LwTwKG1pg661pwr86C1mwraCgoK68&__csr=grN5FYlfQyRvndh3_rqQPkSj-9RKJ4X9nLF4SaykQAucyGBiybJ3oE-AQVeqqmfvLXRCAmm4F-KmH_h8gAyFXKqEB1ebUbHDypogBAyo014aAm0cVz60BE8U6meSbg5C05U80lxoEi8ghAN04i0zoy0A60Ay08J035E2JwgE4e6ywb5160bLOwdy00Bgo&__comet_req=7&fb_dtsg=NAcObOxNRgzYWwD-eNgl44Xy1LD-gKvd-bnxXwD-lMVvDS3u0s-rj0A%3A17865553615041151%3A1698149837&jazoest=26222&lsd=ZHrQI19VXKLVRBM7HN6TeL&__spin_r=1009558901&__spin_b=trunk&__spin_t=1698668955&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PolarisSearchBoxRefetchableQuery";

export const instagramAPIHeaders = {
  accept: "*/*",
  "accept-language": "pt-BR,pt;q=0.9",
  "content-type": "application/x-www-form-urlencoded",
  dpr: "0.9",
  "sec-ch-prefers-color-scheme": "light",
  "sec-ch-ua": '"Not=A?Brand";v="99", "Chromium";v="118"',
  "sec-ch-ua-full-version-list":
    '"Not=A?Brand";v="99.0.0.0", "Chromium";v="118.0.5993.88"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-model": '""',
  "sec-ch-ua-platform": '"Linux"',
  "sec-ch-ua-platform-version": '"5.15.0"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "viewport-width": "1422",
  "x-asbd-id": "129477",
  "x-csrftoken": "NbfJndnXi1yntvyg0QUAtzFJ8iP3q1Da",
  "x-ig-app-id": "936619743392459",
  "x-ig-www-claim": "hmac.AR3auDkVS_raTDKTlQUkJSSeMXaqPQKXM5IQyBvnt8I_9S2M",
  "x-requested-with": "XMLHttpRequest",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  cookie:
    'dpr=0.8999999761581421; ig_nrcb=1; mid=ZTe0xwAEAAEe8cgtk8nKhEXinrP_; ig_did=8881F530-9496-4557-B433-CE69E789614E; csrftoken=NbfJndnXi1yntvyg0QUAtzFJ8iP3q1Da; ds_user_id=62545971060; datr=2rU3ZSR0-Msn3BeHifCCnHVX; ig_lang=pt-br; sessionid=62545971060%3AxFUk1eA83dcEpL%3A24%3AAYecgoxAf68eTbX7KfyGTofxvxBQqy9BbUr6so0ZDA; rur="NCG\\05462545971060\\0541729770432:01f76e22c275bcccbfaf8c3558d7bb8b29d86f9477b20f30dcdcc100d550b67091fc27bd"',
};

export const mediaAPIHeaders = {
  accept: "*/*",
  "accept-language": "en-US,en;q=0.9",
  "sec-ch-ua": '"Not=A?Brand";v="99", "Chromium";v="118"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Linux"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "cross-site",
  Referer: "https://www.instagram.com/",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

const InstagramIndentityListener = () => {
  // @ts-ignore
  XMLHttpRequest.prototype.oldSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (data) {
    if (data?.toString().includes("&variables=")) {
      const str = data.toString();
      console.log("API INDENTITY");
      console.log(str.split("&variables=")[0]);
    }
    // @ts-ignore
    this.oldSend.call(this, data);
  };
};
