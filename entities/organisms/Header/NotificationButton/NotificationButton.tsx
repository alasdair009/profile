"use client";

import notificationIcon from "@/entities/assets/notification.svg";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import styles from "../Header.module.css";
import { Button } from "@/entities";
import Image from "next/image";

type NotificationButtonProps = {
  isSubscribed: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export function NotificationButton({
  isSubscribed,
  ...rest
}: NotificationButtonProps) {
  const [notificationState, setNotificationState] =
    useState<NotificationPermission>("denied");

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

  // useEffect(() => {
  //   if ("Notification" in window) {
  //     setNotificationState(Notification.permission);
  //   }
  // }, []);

  return (
    <Button
      type="button"
      variant="transparent"
      onClick={() => permissionRequest()}
      {...rest}
    >
      <Image
        className={`${styles.notificationIcon} ${isSubscribed ? styles.isSubscribed : ""}`}
        src={notificationIcon}
        alt="Notifications icon"
        style={{
          background: notificationState === "granted" ? "green" : "red",
          display: "none",
        }}
      />
    </Button>
  );
}
