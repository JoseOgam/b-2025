"use client";
import { Homepage } from "@/components";
import store from "@/services/store";
import React, { useState } from "react";
import { Provider } from "react-redux";

export default function HomePage() {
  return (
    <main>
      <Provider store={store}>
        <Homepage />
      </Provider>
    </main>
  );
}
