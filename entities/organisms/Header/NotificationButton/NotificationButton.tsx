import notificationIcon from "@/entities/assets/notification.svg";
import { sizes } from "@/entities";
import { NotificationButton as Root, NotificationIcon } from "../styles";
import { HTMLAttributes } from "react";

type NotificationButtonProps = {
  isSubscribed: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export function NotificationButton({
  isSubscribed,
  ...rest
}: NotificationButtonProps) {
  return (
    <Root type="button" variant="transparent" {...rest}>
      <NotificationIcon
        src={notificationIcon}
        alt="Notifications icon"
        $isSubscribed={isSubscribed}
      />
    </Root>
  );
}
