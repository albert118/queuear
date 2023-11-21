'use client';

export default async function Greeter({ message }) {
  return (
    <div id="welcome">
      <h1>
        <span>{message}</span>
        Welcome 👋
      </h1>
    </div>
  );
}
