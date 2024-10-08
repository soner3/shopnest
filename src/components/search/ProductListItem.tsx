"use client";

import { Product } from "@/interfaces";
import Image from "next/image";
import React from "react";
import ProductCardBanner from "../ProductCardBanner";
import { motion } from "framer-motion";
import ProductRating from "../ProductRating";

export default function ProductListItem({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="relative h-60 w-80 md:h-80 md:w-80"
    >
      <Image
        src={product.images[0]}
        alt={product.title}
        fill
        quality={30}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain"
        loading={index === 0 ? "eager" : "lazy"}
        priority={index === 0}
      />
      <ProductCardBanner product={product} />
      <ProductRating product={product} />
    </motion.li>
  );
}
