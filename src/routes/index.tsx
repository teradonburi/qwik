import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QGreetings } from "~/components/Greetings";

export default component$(() => {
  return (
    <main>
      <p>Hello from Qwik</p>
      <QGreetings />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
