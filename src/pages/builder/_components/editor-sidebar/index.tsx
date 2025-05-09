import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { useEditor } from "@/pages/providers/editor/editor-provider";
import clsx from "clsx";
import { TabListEditor } from "./tabs";
import { SettingsTab } from "./tabs/components-tab/settings-tab";

type Props = {};

export function EditorSidebar(props: Props) {
  const { state, dispatch } = useEditor();
  return (
    <Sheet modal={false} open>
      <Tabs className="w-full" defaultValue="Settings">
        <SheetContent
          side="right"
          className={clsx(
            "mt-[97px] w-16 z-[80] shadow-none p-0 focus:border-none transition-all overflow-hidden [&>button]:hidden",
            { hidden: state.editor.previewMode }
          )}
        >
          <TabListEditor />
        </SheetContent>
        <SheetContent
          side="right"
          className={clsx(
            "mt-[97px] w-80 z-[40] shadow-none p-0 mr-16 h-full transition-all overflow-hidden [&>button]:hidden",
            { hidden: state.editor.previewMode }
          )}
        >
          <div className="grid gap-4 h-full pb-36 overflow-scroll">
            <TabsContent value="Settings">
              <SheetHeader className="text-left p-6">
                <SheetTitle>Estilos</SheetTitle>
                <SheetDescription>
                  Demosntr sua criativdade! Você pode customizar todos
                  componente como você gostar.
                </SheetDescription>
              </SheetHeader>
              <SettingsTab />
            </TabsContent>
          </div>
        </SheetContent>
      </Tabs>
    </Sheet>
  );
}
