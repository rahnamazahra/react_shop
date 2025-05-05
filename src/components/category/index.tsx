"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";

const categories = [
    { title: "مردانه", image: cat1, slug: "cat1" },
    { title: "کودکانه", image: cat2, slug: "cat2" },
    { title: "زنانه", image: cat3, slug: "cat3" },
];

function Category() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mt-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
                خرید بر اساس دسته بندی
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                {loading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <Card key={index} className="overflow-hidden border border-gray-100">
                            <CardContent className="p-4 space-y-4">
                                {/* تصویر با نسبت ابعاد */}
                                <div className="relative w-full h-40 md:h-48">
                                    <Skeleton className="absolute top-0 left-0 w-full h-full rounded-lg" />
                                </div>

                                {/* عنوان */}
                                <div className="flex justify-center">
                                    <Skeleton className="h-5 w-24 rounded" />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                    : categories.map((category, index) => (
                        <Link
                            href={`/categories/${category.slug}`}
                            key={index}
                            className="block group"
                        >
                            <Card className="overflow-hidden transition-shadow group-hover:shadow-1xl border border-gray-100">
                                <CardContent className="relative p-0 h-60 md:h-72">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 bg-black/60 text-white w-full text-center py-3 text-lg font-semibold">
                                        {category.title}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Category;
