"use client"

import * as React from "react"
import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
    },
]

function Navigation() {
    return (
        <div className="w-full">
            <div className="max-w-7xl px-4 mx-auto mt-4 mb-10 border-b-[1px] border-gray-200">
                <div className="flex flex-row-reverse items-center justify-between">

                    {/* دکمه موبایل */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="w-6 h-6" />
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white w-64 shadow-md">
                                <div className="space-y-4 mt-6 text-right">
                                    <Link href="/docs" className="block font-medium">فروشگاه</Link>
                                    <Link href="/docs" className="block font-medium">دسته بندی</Link>
                                    <Link href="/docs" className="block font-medium">سفارشات</Link>
                                    <Link href="/docs" className="block font-medium">تماس با ما</Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* منوی دسکتاپ */}
                    <div className="hidden lg:flex justify-end w-full text-right">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-4 flex-row-reverse">
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            فروشگاه
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>دسته بندی</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-right">
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
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            پیگیری سفارشات
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            تماس با ما
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* آیکن سبد خرید و دکمه‌های ثبت‌نام و ورود */}
                    <div className="flex items-center ml-4 space-x-4">
                        {/* آیکن سبد خرید */}
                        <Link href="/cart" className="hover:text-primary transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                        </Link>

                        {/* دکمه ثبت‌نام */}
                        <Link href="/register" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            ثبت‌نام
                        </Link>

                        {/* دکمه ورود */}
                        <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            ورود
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navigation
