
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="min-h-vh">{children}</main>
    </>
  );
}