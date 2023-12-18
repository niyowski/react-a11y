import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const codeImpl = `
// use-page-focus.tsx
export const usePageFocus = () => {
  const { pathname } = useLocation();
  const focusRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, [pathname]);

  return focusRef;
};

// page.tsx
export default function Page() {
  const ref = usePageFocus();

  return (
    <>
      <h1 tabIndex={-1} ref={ref}>Page title</h1>
      {/* ... */}
    </>
  );
  )
}
`;

const implementation: CodeBlock = {
  id: 'keyboard-focus-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="client-side-routing-keyboard-focus"
      title="How to manage keyboard focus?"
      blocks={[implementation]}
      alignTop
      centerContent
    />
  );
};
