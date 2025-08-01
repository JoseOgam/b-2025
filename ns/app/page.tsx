import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1>home page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            accusantium dolorum. Quos, modi ullam placeat quidem atque
            exercitationem enim numquam adipisci reiciendis repellat libero,
            esse velit? Officia libero in laboriosam!
          </p>
        </div>
      </main>
    </div>
  );
}
