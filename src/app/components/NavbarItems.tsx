"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { usePathname } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "My Works",
    href: "/showcase/my-work",
    description: "Web I built using Next JS",
  },
  {
    title: "My Achievements",
    href: "/docs/primitives/hover-card",
    description: "Javascript Library I love the most",
  },
  {
    title: "My Skills",
    href: "/docs/primitives/alert-dialog",
    description: "Projects I have completed using React Native",
  },
];

const activeMenuClass = "text-primary font-bold";

const NavbarItems: React.FC = () => {
  const pathname = usePathname();
  const splitedPathname = pathname.split("/");
  console.log(splitedPathname);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                navigationMenuTriggerStyle() +
                ` ${pathname === "/" && activeMenuClass}`
              }
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${
              splitedPathname[1] === "showcase" && activeMenuClass
            }`}
          >
            Showcase
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] p-4 md:w-[500px] lg:w-[500px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="pl-6">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon
                icon={faMugHot}
                className="mr-2 mt-[-9px] text-primary"
                size="2x"
              />
              Buy Me a Coffee
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const href = props?.href ?? "/";
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} legacyBehavior passHref>
          <main>
            <span
              ref={ref}
              className={cn(
                `block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,
                className
              )}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </span>
          </main>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavbarItems;
