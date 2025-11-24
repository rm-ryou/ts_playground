import Header from "./components/Header.tsx";
import CoreConcept from "./components/CoreConcept.tsx";

import { CORE_CONCEPTS } from "./data.ts";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return (
                <CoreConcept
                  image={concept.image}
                  title={concept.title}
                  description={concept.description}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
