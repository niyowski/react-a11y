import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import 'reveal.js/plugin/highlight/monokai.css';

import { useEffect } from 'react';
import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

import { SlideDeck } from '~/reveal/deck';
import Slides from '~/slides';

export function App() {
  useEffect(() => {
    if (!Reveal.isReady()) {
      Reveal.initialize({
        hash: true,
        controlsTutorial: false,
        plugins: [RevealHighlight, RevealMarkdown, RevealNotes],
      });
    }
  }, []);

  return (
    <div className="prose h-screen max-w-none">
      <SlideDeck>{Slides}</SlideDeck>
    </div>
  );
}

export default App;
