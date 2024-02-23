import { Card } from "@nextui-org/react";
import AuthStatus from "./authStatus";

const UserHeaderCard = ({ className }: { className?: string }) => (
  <Card shadow="none" className={`rounded-t-none flex flex-row items-center shadow-none justify-center ${className}`}>
    <AuthStatus />
  </Card>
);

export default UserHeaderCard;
