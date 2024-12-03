import React from "react";
import Image from "next/image";
import { Button, Input } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Container } from "./container";
const Header = () => {
  return (
    <header className="mt-5 border-b border-gray-100 pb-4">
      <Container className="flex justify-between">
        <a href="/">
          <div className="flex">
            <Image
              className="mr-3 flex-shrink-0 object-contain"
              src="/logo.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <div>
              <h1 className="font-black text-2xl">NEXT PIZZA</h1>
              <div className="text-gray-500 leading-none">вкуснее некуда</div>
            </div>
          </div>
        </a>
        <div className="">
          <Input />
        </div>

        <div className="flex">
          <Button variant={"outline"} className="mr-3">
            <User size={15} className="mr-1" /> Профиль
          </Button>
          <Button className="group relative">
            <b>520 ₽</b>
            <span className="h-full w-[1px] bg-white/30 mx-3" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
