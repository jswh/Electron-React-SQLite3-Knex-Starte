import { Container, Navbar } from "@nextui-org/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {

}

const MainLayout: FC<MainLayoutProps> = () => {
  return (<div>
   <Navbar isBordered isCompact>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <Outlet/>
  </div>);
}

export default MainLayout;
