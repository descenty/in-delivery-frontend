"use client";

import { Button, Link } from "@nextui-org/react";
import { Session } from "inspector";
import { User } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
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
  const cachedUser: User = JSON.parse(localStorage.getItem("user") ?? "{}");
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
    return (
      <div className="flex flex-row gap-6 items-center">
        Вошли, как {cachedUser?.name}
        <Button
          color="secondary"
          variant="flat"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/vacancies" }));
          }}
        >
          Выйти
        </Button>
      </div>
    );
  } else if (session) {
    localStorage.setItem("user", JSON.stringify(session.user));
    return (
      <div className="flex flex-row gap-6 items-center">
        Вошли, как {session.user?.name}
        <Button
          color="secondary"
          variant="flat"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/vacancies" }));
          }}
        >
          Выйти
        </Button>
      </div>
    );
  }

  return (
    <Button className="text-md px-4 flex flex-row gap-2 items-center" color="primary" variant="flat" onClick={() => signIn("keycloak")}>
      <UserIcon />
      Войти
    </Button>
  );
}
