"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-[#034694] text-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Nicolas Sandrin
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent side="left">
              <VisuallyHidden>
                <DialogTitle>Mobile Navigation</DialogTitle>
                <DialogDescription>Navigate through the site</DialogDescription>
              </VisuallyHidden>
              <nav className="flex flex-col gap-4 mt-10 text-lg text-blue-700 dark:text-yellow-200">
                <Link href="#about" className="hover:underline">About</Link>
                <Link href="#projects" className="hover:underline">Projects</Link>
                <Link href="#contact" className="hover:underline">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
