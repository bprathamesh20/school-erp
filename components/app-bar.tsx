'use client'

import { signIn, useSession , signOut} from "next-auth/react";
import { Button } from "./ui/button";

export default function AppBar() {
    const session = useSession()
    const user = session.data?.user
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center font-bold">
        <a href="/students/list" className="text-2xl">
          KrushakERP
          </a>
        </div>
      <div className="flex items-center">
        {user && <img src={user.image || ""} className="w-8 h-8 rounded-full mr-4" alt="user avatar" />}

        {user && <span className="text-sm font-medium mr-4">{user.name?.split(" ")[0]}</span>}
        
        {session.data?.user && <Button onClick={() => signOut()}>Sign out</Button>}
        {!session.data?.user && <Button onClick={() => signIn()}>Sign in</Button>}
      </div>
    </div>
  );
}