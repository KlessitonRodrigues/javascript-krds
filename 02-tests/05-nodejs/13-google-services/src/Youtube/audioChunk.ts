export const getAudioChunk = () => {
  const params = {
    expire: "1700151730",
    ei: "Uu1VZbGYN_SD-LAPmYSsgAo",
    ip: "45.7.76.204",
    id: "o-AFCvx2lXssaWaScfBbDiDThoiXZs2SQ5XnXu7bNl381s",
    itag: "251",
    source: "youtube",
    requiressl: "yes",
    mh: "Mi",
    mm: "31,29",
    mn: "sn-p4p8xuxax-uixe,sn-pmcg-4vgl",
    ms: "au,rdu",
    mv: "m",
    mvi: "2",
    pl: "24",
    initcwndbps: "1273750",
    siu: "1",
    spc: "UWF9fyehGAmcSKIRWU6R7Lu365c6fbQLC5arfHLrH8vYnuJ0wyiP_jo",
    vprv: "1",
    svpuc: "1",
    mime: "audio/webm",
    ns: "gvJ4TZ-MvY9adm_-UAKxY30P",
    gir: "yes",
    clen: "4433234",
    dur: "290.681",
    lmt: "1699951010722500",
    mt: "1700129826",
    fvip: "7",
    keepalive: "yes",
    fexp: "24007246",
    beids: "24350018",
    c: "WEB_EMBEDDED_PLAYER",
    txp: "5532434",
    n: "7WpZM1m1ADsFJA",
    sparams:
      "expire,ei,ip,id,itag,source,requiressl,siu,spc,vprv,svpuc,mime,ns,gir,clen,dur,lmt",
    sig: "ANLwegAwRAIgXCUvpnqV6aXtNJm3JYlIEpBJM6KlabziqVpKpmgjWxoCICe2l-Bc_mTx8qg1SABnEi29VBPJeOhCrq7BPgl1g6FU",
    lsparams: "mh,mm,mn,ms,mv,mvi,pl,initcwndbps",
    lsig: "AM8Gb2swRQIhAJJ2Y2GQpy2asCNKlkAdF6NBA2vUFmG3-E8o0C1D5yFAAiABZHbcTKS42x8R2xUXEauCGWfKcUAzdWoRkdsA6VuMXg==",
    alr: "yes",
    cpn: "8w4iftbUKhNfSv_b",
    cver: "1.20231112.00.00",
    range: "0-99999999999",
    rn: "2",
    rbuf: "0",
    pot: "Mm7wpzixYPkZUvCfOPyqs8hPAiJ3t8QvdKNM3NIeqtEQ7_mU87ltJxu4xtbFT5BSCwaeCUkSMgUD_urINKQM3_JQTJoYDEX7WSBHv-sDCdO5ySW8Qczg1GghMWyrqdgj7w_jTjvpwBGEJrXX2SDVew==",
    ump: "1",
    srfvp: "1",
  };

  const query = new URLSearchParams(params).toString();
  return fetch(
    `https://rr2---sn-p4p8xuxax-uixe.googlevideo.com/videoplayback?${query}`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "sec-ch-ua": '"Chromium";v="119", "Not?A_Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-client-data": "CPnbygE=",
        Referer: "https://www.youtube.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: "x\u0000",
      method: "POST",
    }
  );
};
