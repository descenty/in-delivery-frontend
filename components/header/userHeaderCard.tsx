import { Card } from "@nextui-org/react";
import AuthStatus from "./authStatus";

const UserHeaderCard = () => (
  <Card className="w-[16vw] min-w-[240px] h-24 rounded-t-none flex flex-row items-center justify-center">
    <AuthStatus />
  </Card>
);

export default UserHeaderCard;
