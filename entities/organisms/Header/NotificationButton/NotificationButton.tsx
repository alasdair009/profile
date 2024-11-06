"use client";

import notificationIcon from "@/entities/assets/notification.svg";
import { NotificationButton as Root, NotificationIcon } from "../styles";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";

type NotificationButtonProps = {
  isSubscribed: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export function NotificationButton({ isSubscribed, ...rest }: NotificationButtonProps) {
  const [notificationState, setNotificationState] = useState<NotificationPermission>("denied");

  const permissionRequest = useCallback(() => {
    console.log("checking...");
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("granted");
          setNotificationState(Notification.permission);
        } else {
          console.log("denied");
        }
      });
    } else {
      console.log("not possible");
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window) {
      setNotificationState(Notification.permission);
    }
  }, []);

  return (
    <Root type="button" variant="transparent" onClick={() => permissionRequest()} {...rest}>
      <NotificationIcon
        src={notificationIcon}
        alt="Notifications icon"
        $isSubscribed={isSubscribed}
        style={{
          background: notificationState === "granted" ? "green" : "red",
          display: "none",
        }}
      />
    </Root>
  );
}
