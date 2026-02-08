import Link from "next/link";
import { Timer, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productLinks = [
  { href: "/timesheet", label: "Timesheet" },
  { href: "/customers", label: "CRM" },
  { href: "/projects", label: "Project Management" },
  { href: "/customers", label: "Customer Entry" },
  { href: "/leave-management", label: "Leave Management" },
  { href: "/payroll", label: "Employee Details" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Timer className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">TimeFlow</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60">
                Products
                <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2">
                {productLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.label}
                    asChild
                    className="cursor-pointer p-2 transition-transform duration-200 hover:-translate-y-px"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/#pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="flex items-center space-x-2">
                  <Timer className="h-6 w-6 text-primary" />
                  <span className="font-bold">TimeFlow</span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="products" className="border-b-0">
                        <AccordionTrigger className="py-2 hover:no-underline">
                          Products
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-3 pl-4 pt-2">
                            {productLinks.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Link href="/#pricing">Pricing</Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
