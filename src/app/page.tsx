import HotProductCard from "@/components/homepage/HotProducts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="my-4 text-center text-3xl font-bold text-sky-500">
        Welcome to ShopZilla!
      </h1>
      <p className="text-center text-xl font-bold">
        {/*Generiert von ChatGPT */}
        Discover a world of endless possibilities with products from over 20
        diverse categories, all in one place. Whether you&apos;re looking for
        electronics, fashion, home essentials, or something unique, we&apos;ve
        got it all. To give you a taste of what we offer, here are four
        handpicked items from our vast collection. Explore now and find the
        perfect product for you!
      </p>
      <section>
        <HotProductCard />
      </section>
      <Link
        href={"/products/search/all/"}
        className="mx-auto my-4 flex w-1/2 justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 p-2 text-2xl font-semibold text-white duration-200 hover:scale-105 active:scale-95 dark:from-violet-600 dark:to-rose-600"
      >
        Discover All Products
      </Link>
    </>
  );
}
