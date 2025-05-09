import EditorProvider from "../providers/editor/editor-provider";
import { EditorNavigation } from "./_components/editor-navigation";
import { EditorSidebar } from "./_components/editor-sidebar";

export function BuilderPage() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background">
      <EditorProvider pageId="teste" pageDetails={null}>
        <EditorNavigation pageId="" />
        <EditorSidebar />
      </EditorProvider>
    </div>
  );
}
