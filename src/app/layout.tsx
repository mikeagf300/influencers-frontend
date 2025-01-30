import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import { UserProvider } from "../contexts/UserContext";
import "../styles/globals.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 text-white p-0 m-0 min-h-screen">
        <UserProvider>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-4">{children}</main>
          </div>
        </UserProvider>
      </body>
    </html>
  );
};

export default Layout;
