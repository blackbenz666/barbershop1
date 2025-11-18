"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { useModal } from "@/contexts/ModalContext";

export const BarbershopLogo = () => {
  return (
    <svg
      fill="none"
      height="36"
      viewBox="0 0 32 32"
      width="36"
      className="text-gray-900"
    >
      <path
        clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM14 8H18V10H14V8ZM10 12H22V14H10V12ZM8 16H24V18H8V16ZM10 20H22V22H10V20Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { openSignUpModal } = useModal();

  const menuItems = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/features" },
    { name: "Интеграции", href: "/integrations" },
  ];

  const mobileMenuItems = [
    "Профиль",
    "Дашборд",
    "Активность",
    "Аналитика",
    "Система",
    "Развертывания",
    "Мои настройки",
    "Настройки команды",
    "Помощь и отзывы",
    "Выйти",
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="flex justify-between items-center px-10 h-[60px] bg-white border-b border-gray-200"
        maxWidth="full"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className="sm:hidden text-gray-900"
          />
          <NavbarBrand>
            <BarbershopLogo />
            <p className="font-bold text-inherit text-gray-900">Барбершоп</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={isActive("/")}>
            <Link
              color={isActive("/") ? "primary" : "foreground"}
              href="/"
              className="text-gray-900"
            >
              Главная
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive("/features")}>
            <Link
              color={isActive("/features") ? "primary" : "foreground"}
              href="/features"
              className="text-gray-900"
            >
              Услуги
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive("/integrations")}>
            <Link
              color={isActive("/integrations") ? "primary" : "foreground"}
              href="/integrations"
              className="text-gray-900"
            >
              Интеграции
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-gray-900">
              Войти
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as="button"
              color="primary"
              variant="flat"
              onPress={openSignUpModal}
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              Регистрация
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {mobileMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-gray-900"
                color={
                  index === 2
                    ? "primary"
                    : index === mobileMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

