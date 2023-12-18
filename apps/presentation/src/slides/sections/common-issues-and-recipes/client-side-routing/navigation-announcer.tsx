import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const installation: CodeBlock = {
  id: 'navigation-announcer-installation',
  language: 'bash',
  code: `npm install react-helmet-async`,
};

const codeImpl = `
// app.tsx
export default function App() {
  return (
    <HelmetProvider>
      {/* ... */}
    </HelmetProvider>
  )
}

// page.tsx
export default function Page() {
  return (
    <>
      <Helmet>
        <title>Title of the page</title>
      </Helmet>
      {/* ... */}
    </>
  );
  )
}

// use-page-title.tsx
export const usePageTitle = (pathname: string) => {
  const [pageTitle, setPageTitle] = useState(document.title);

  useEffect(() => {
    setTimeout(() => {
      const title = document.title;
      setPageTitle(title);
    }, 500);
  }, [pathname]);

  return pageTitle;
};

// layout.tsx
export default function Layout() {
  const { pathname } = useLocation();
  const pageTitle = usePageTitle(pathname);

  return (
    <>
      {/* ... */}
      <div
        aria-live="polite"
        className="absolute -left-[10000px] top-auto h-1 w-1 overflow-hidden"
      >
        {\`Navigated to \${pageTitle}\`}
      </div>
    </>
  );
}
`;

const implementation: CodeBlock = {
  id: 'navigation-announcer-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="client-side-routing-navigation-announcer"
      title="How to announce route changes?"
      blocks={[installation, implementation]}
      alignTop
      centerContent
    />
  );
};
