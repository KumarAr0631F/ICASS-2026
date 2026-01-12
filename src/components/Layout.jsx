import Visitor from "./Visitor"; // path to your counter component

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      {children}
      <Visitor />
    </div>
  );
}
