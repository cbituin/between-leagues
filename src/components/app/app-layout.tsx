import { MouseEvent } from "react";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    return;
  };

  return (
    <>
      <div>
        <Button onClick={handleClick}>Home</Button>
        <Button onClick={handleClick}>Profile</Button>
      </div>

      <Outlet />
    </>
  );
};

export default AppLayout;
