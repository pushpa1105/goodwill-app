"use client";

import React from "react";

class ChatwootWidget extends React.Component {
  componentDidMount() {
    (window as any).chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "en",
      type: "standard",
    };

    console.log(process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL);

    (function (d, t) {
      var BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL;
      var g = d.createElement(t) as any,
        s = d.getElementsByTagName(t)[0] as any;
      g.src = BASE_URL + "/packs/js/sdk.js";
      s.parentNode.insertBefore(g, s);
      g.defer = true;
      g.async = !0;
      g.onload = function () {
        (window as any).chatwootSDK.run({
          websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_WEB_TOKEN,
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }

  render() {
    return null;
  }
}

export default ChatwootWidget;
