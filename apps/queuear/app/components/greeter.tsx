export default function Greeter({
  welcomeMessage,
  name,
}: {
  welcomeMessage?: string;
  name?: string;
}) {
  return (
    <div id="welcome">
      <h1>
        <span>Environment: {name ?? 'No environment found'}</span>
        {welcomeMessage ?? 'Welcome 👋'}
      </h1>
    </div>
  );
}
