import { Chip } from "@nextui-org/react";
import { MessageDTO } from "./chat";

const Message = ({ message, sent }: { message: MessageDTO; sent: boolean }) => (
  <div className={`max-w-[300px] ${sent && "self-end"}`}>
    <Chip
      className="p-2 h-fit rounded-2xl text-md"
      color={sent ? "primary" : "default"}
    >
      {message.text}
    </Chip>
  </div>
);

export default Message;
