import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';

import { useEffect } from 'react';
import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

import { SlideDeck } from '~/reveal/deck';
import { Slides } from '~/slides';

export function App() {
  useEffect(() => {
    if (!Reveal.isReady()) {
      Reveal.initialize({
        hash: true,
        controlsTutorial: false,
        plugins: [RevealNotes],
      });
    }
  }, []);

  return (
    <div className="prose prose-base h-screen max-w-none">
      <SlideDeck>
        <Slides />
      </SlideDeck>
    </div>
  );
}

export default App;
