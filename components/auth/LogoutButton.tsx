"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/actions/auth";

const LogoutButton = () => {
  const logoutFn = async () => {
    await logout();
  };

  return (
    <aside>
      <div className="flex items-center justify-center">
        <Button
          className="w-full max-w-xs font-bold"
          onClick={logoutFn}
          type="button"
        >
          로그아웃
        </Button>
      </div>
    </aside>
  );
};

export default LogoutButton;
