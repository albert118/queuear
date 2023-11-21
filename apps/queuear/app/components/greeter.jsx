export default async function Greeter() {
  const res = await fetch('http://localhost:4200/api/environment');
  const environment = res.text() ?? 'No environment found';

  return (
    <div id="welcome">
      <h1>
        <span>{environment}</span>
        Welcome 👋
      </h1>
    </div>
  );
}
