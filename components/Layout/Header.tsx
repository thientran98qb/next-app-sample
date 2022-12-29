import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import logo from '../../public/images/logoo.svg'
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const router = useRouter()
  const [openNav, setOpenNav] = useState(false);
  const { data: session } = useSession()

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md hover:underline transition-all"
      >
        <Link href="/quizz" className="flex items-center">
          Quizz
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md hover:underline transition-all"
      >
        <Link href="/profile" className="flex items-center">
          Account
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md hover:underline transition-all"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md hover:underline transition-all"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="w-full max-w-none rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto w-full flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={30}
              height={30}
            />
            <span className="uppercase text-lg bg-black text-white p-[2px] rounded">Thien <span className="text-sm underline font-bold">Dev</span></span>
          </div>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex gap-2">
          {session ?
            <Avatar src="https://www.material-tailwind.com/img/face-2.jpg" alt="avatar"/>
            :
            <>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outlined" size="sm" className="hidden lg:inline-block">
                <span onClick={() => router.push('/register')}>Register</span>
              </Button>
            </>
          }
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Login</span>
        </Button>
        <Button variant="outlined" size="sm" fullWidth className="mb-2">
          <span>Register</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
