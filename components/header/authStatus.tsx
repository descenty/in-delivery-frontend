"use client";

import { Button, Link, Spinner } from "@nextui-org/react";
import { Session } from "inspector";
import { User } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import UserIcon from "../icons/userIcon";

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function AuthStatus() {
  const { data: session, status } = useSession();
  const [cachedUser, setCachedUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    setCachedUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);
  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      // @ts-ignore
      session?.error === "RefreshAccessTokenError"
    ) {
      localStorage.removeItem("user");
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (status == "loading") {
    return <Spinner />;
  } else if (session) {
    localStorage.setItem("user", JSON.stringify(session.user));
    return (
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center max-md:text-[0px] font-semibold pointer-events-auto">
        {session.user?.name}
        <Button
          color="secondary"
          variant="flat"
          size="sm"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
        >
          Выйти
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="text-md px-4 max-sm:px-0 min-w-unit-12 flex flex-row gap-2 items-center h-12 pointer-events-auto"
      color="primary"
      variant="flat"
      onClick={() => signIn("keycloak")}
    >
      <UserIcon />
      <span className="max-md:hidden">Войти</span>
    </Button>
  );
}
