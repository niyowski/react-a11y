type BrowserName = 'chrome' | 'edge' | 'firefox' | 'safari' | 'opera';
type TestType = 'unit' | 'component' | 'integration' | 'e2e';
type TestTool = 'jest' | 'cypress' | 'playwright';
type Tag = BrowserName | TestTool | TestType;

export interface ToolInfo {
  id: string;
  title: string;
  description?: string;
  tags?: Tag[];
  link: string;
}
