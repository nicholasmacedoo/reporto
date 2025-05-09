import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Plus, SettingsIcon, SquareStack } from "lucide-react";
// import { useEditor } from "@/pages/providers/editor/editor-provider";

type Props = {};

export function TabListEditor(props: Props) {
  //   const { state, dispatch } = useEditor();
  return (
    <TabsList className="flex items-center flex-col justify-evenly w-full bg-transparent h-fit gap-4">
      <TabsTrigger
        value="Settings"
        className="w-10 h-10 p-0 py-2 data-[state=active]:bg-muted"
      >
        <SettingsIcon />
      </TabsTrigger>
      <TabsTrigger
        value="Components"
        className="w-10 h-10 p-0 py-2 data-[state=active]:bg-muted"
      >
        <Plus />
      </TabsTrigger>
      <TabsTrigger
        value="Layers"
        className="w-10 h-10 p-0 py-2 data-[state=active]:bg-muted"
      >
        <SquareStack />
      </TabsTrigger>
      <TabsTrigger
        value="Media"
        className="w-10 h-10 p-0 py-2 data-[state=active]:bg-muted"
      >
        <Database />
      </TabsTrigger>
    </TabsList>
  );
}
