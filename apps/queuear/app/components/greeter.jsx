'use client';

export default async function Greeter({ message }) {
  return (
    <div id="welcome">
      <h1>
        <span>{message ?? 'No environment found'}</span>
        Welcome 👋
      </h1>
    </div>
  );
}
