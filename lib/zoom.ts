const KJUR = require("jsrsasign");

export const getData = async (code: any) => {
  if (code) {
    const data =
      "OBoZBOeXSJashXFjoPeIpw" + ":" + "iG7SmTdMu2IiTt84Oxe5LvsGpZlkwULA";
    const newData = Buffer.from(data, "utf8");
    const b64string = newData.toString("base64");
    const zoomUrl = new URL("https://zoom.us/oauth/token");
    zoomUrl.searchParams.set("grant_type", "authorization_code");
    zoomUrl.searchParams.set("code", code || "");
    zoomUrl.searchParams.set(
      "redirect_uri",
      "http://localhost:3000/webinars/123/live"
    );
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + b64string,
        },
      };
      console.log(zoomUrl.href, options);
      const response = await fetch(zoomUrl.href, options);
      console.log(response.status);
      const json = await response.json();
      console.log(json);
      console.log(json.access_token);

      if (json.access_token) return json.access_token;

      //  if (json.access_token) {
      //    const newOptions = {
      //      method: "GET",
      //      headers: {
      //        Authorization: "Bearer " + json.access_token,
      //      },
      //    };
      //    const preUser = await fetch("https://api.zoom.us/v2/users", newOptions);
      //    const zoomUser = await preUser.json();
      //    console.log(zoomUser);

      //    return zoomUser;
      //  }
    } catch (e) {
      console.log(e);
    }
  } else {
    return "nfjdffh";
  }
};

// https://www.npmjs.com/package/jsrsasign

export const generateSignature = (meetingNumber: any, role: any) => {
  const key = process.env.SDK_CLIENT_ID;
  const secret = process.env.SDK_SECRET_KEY;
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;
  const oHeader = { alg: "HS256", typ: "JWT" };

  const oPayload = {
    sdkKey: key,
    appKey: key,
    mn: meetingNumber,
    role: role,
    iat: iat,
    exp: exp,
    tokenExp: exp,
  };

  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, secret);
  console.log(sdkJWT);
  return sdkJWT;
};

// console.log(
//   generateSignature(
//     process.env.SDK_CLIENT_ID,
//     process.env.SDK_SECRET_KEY,
//     123456789,
//     0
//   )
// );
