import { Link } from "react-router-dom";

export function PageHome() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8">
        <h1>Modelos de relatorio</h1>
        <Link to="/new-model">Novo modelo</Link>
      </header>

      <main>
        <strong>Modelos</strong>
      </main>
    </div>
  );
}
