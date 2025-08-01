"use client";
import { Characters } from "@/components";
import store from "@/services/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <Provider store={store}>
          <Characters />
        </Provider>
      </div>
    </main>
  );
}
