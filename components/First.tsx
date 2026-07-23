import Image from "next/image";

export default function First() {
  return (
    <section className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 items-start lg:px-10">
          <div className="max-w-3xl">
            <h1 className="text-xl lg:text-3xl font-bold leading-tight text-white">
              <span className="text-[#163C43]">Whoever</span>{" "}
              <span>Wherever</span>{" "}
              <span className="text-[#163C43]">Whenever</span>{" "}
              <span>.ritzmediaworld.com</span>
            </h1>

            <p className="mt-6 text-xl lg:text-xl font-medium text-white">
              Your brand keeps working, even when you don&apos;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}