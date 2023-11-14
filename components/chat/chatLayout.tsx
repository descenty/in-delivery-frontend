"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button, Card } from "@nextui-org/react";
import ChatIcon from "@/components/icons/chatIcon";
import Chat from "@/components/chat/chat";

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const ChatLayout = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button
        isIconOnly
        className="fixed bottom-10 z-0 right-10 p-2 w-[54px] h-[54px]"
        color="primary"
        onClick={() => setOpen(true)}
      >
        <ChatIcon />
      </Button>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={30}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Card className="flex rounded-none w-full h-8 justify-center items-center">
          <div className="bg-white w-16 h-[2px] rounded-md"></div>
        </Card>
        <Chat />
      </SwipeableDrawer>
    </>
  );
};

export default ChatLayout;
