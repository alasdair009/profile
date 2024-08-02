"use client";

import notificationIcon from "@/entities/assets/notification.svg";
import { NotificationButton as Root, NotificationIcon } from "../styles";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import useFcmToken from "@/lib/notifications/useFCMToken";
import useFCMToken from "@/lib/notifications/useFCMToken";
import { getMessaging, getToken } from "firebase/messaging";
import firebaseApp from "@/firebase";

type NotificationButtonProps = {
  isSubscribed: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export function NotificationButton({
  isSubscribed,
  ...rest
}: NotificationButtonProps) {
  const [notificationState, setNotificationState] =
    useState<NotificationPermission>("denied");
  const [fcmToken, setFcmToken] = useState("");
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState("");

  const permissionRequest = () => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
          const messaging = getMessaging(firebaseApp);

          // Request notification permission
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          if (permission === "granted") {
            const currentToken = await getToken(messaging, {
              vapidKey:
                "BCGeeUt-hVXpwPelsOIsdohGlCXmxpK8VjkuEA3z6zGzyFLDt35dQm_pAfgV3ylRI1gntXKsIDdMaDQXmR8tbMg", // Replace with your Firebase project's VAPID key
            });
            if (currentToken) {
              setFcmToken(currentToken);
            } else {
              console.log(
                "No registration token available. Request permission to generate one."
              );
            }
          }
        }
      } catch (error) {
        console.log("Error retrieving token:", error);
      }
    };

    retrieveToken();
  };

  return (
    <Root
      type="button"
      variant="transparent"
      onClick={() => permissionRequest()}
      {...rest}
    >
      <NotificationIcon
        src={notificationIcon}
        alt="Notifications icon"
        $isSubscribed={isSubscribed}
        style={{
          background: notificationState === "granted" ? "green" : "red",
          // display: "none",
        }}
        data-sub={notificationPermissionStatus}
      />
    </Root>
  );
}
