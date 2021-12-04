import { RepositoryItem } from "./RespositoryItem";

export function RepositoryList() {
  const repository = {
    name: "unform",
    description: "Forms in React",
    url: "https://github.com/unform/unform",
  };

  return (
    <section>
      <h1>Lista de repositório</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
