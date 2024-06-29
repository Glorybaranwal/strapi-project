import Image from "next/image";
import { Inter } from "next/font/google";
import Post from "./post"
import LoginPage from "./sign-in"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LoginPage />
  );
}
