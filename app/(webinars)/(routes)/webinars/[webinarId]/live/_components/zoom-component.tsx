"use client";

import React, { useEffect, useState } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import { Button } from "@/components/ui/button";

export const ZoomComponent: React.FC = () => {
  const [signature, setSignature] = useState<string>("");

  const authEndpoint = "http://localhost:4000";
  const sdkKey = "iZ3QRssuQdSGYeJ2HJrD6g";
  const meetingNumber = "875 3920 3273";
  const passWord = "iQ1h5U";
  const role = 0;
  const userName = "Tester";
  const userEmail = "";
  const registrantToken = "";
  const zakToken = "";
  const leaveUrl = "http://localhost:3000";

  const getSignature = async () => {
    try {
      const response = await fetch(authEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          meetingNumber: meetingNumber,
          role: role,
        }),
      });

      const data = await response.json();
      startMeeting(data.signature);
    } catch (error) {
      console.error(error);
    }
  };

  const startMeeting = (signature: string) => {
    if (typeof window !== "undefined") {
      ZoomMtg.init({
        leaveUrl: leaveUrl,
        isSupportAV: true,
        success: (success) => {
          console.log(success);

          ZoomMtg.join({
            signature: signature,
            sdkKey: sdkKey,
            meetingNumber: meetingNumber,
            passWord: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken,
            zak: zakToken,
            role: 0,
            success: (joinSuccess) => {
              console.log(joinSuccess);
            },
            error: (error) => {
              console.log(error);
            },
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  };

  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== "undefined") {
      // Load Zoom Web SDK
      ZoomMtg.setZoomJSLib("https://source.zoom.us/2.18.2/lib", "/av");
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();
      ZoomMtg.i18n.load("en-US");
      ZoomMtg.i18n.reload("en-US");
    }
  }, []);

  return (
    <div>
      <h1>Zoom Meeting SDK Sample Next.js</h1>
      <Button onClick={getSignature} type="button">
        Join Meeting
      </Button>
      {/* Add a container for Zoom meeting here */}
      <div id="zmmtg-root"></div>
    </div>
  );
};

export default ZoomComponent;
