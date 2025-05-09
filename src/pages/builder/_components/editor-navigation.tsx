import { useEffect } from "react";
import { useEditor } from "../../providers/editor/editor-provider";
import { Input } from "@/components/ui/input";
import { ChevronLeft, EyeIcon, Redo2, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

type Props = {
  pageId: string;
};

export function EditorNavigation(props: Props) {
  const { state, dispatch } = useEditor();

  async function handleOnSave() {
    const content = JSON.stringify(state.editor.elements);

    try {
      // const response = await upSertPage() {}
    } catch (error) {}
  }

  useEffect(() => {
    dispatch({
      type: "SET_PAGE_ID",
      payload: { pageId: props.pageId },
    });
  }, []);

  return (
    <div>
      <nav className="border-b-[1px] border-b-zinc-800 flex items-center justify-between gap-2 p-6 transition-all">
        <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
          <Button>
            <ChevronLeft />
          </Button>
          <Input className="border-none h-5 m-0 p-0 text-lg" />
        </aside>
        <aside className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-slate-800">
            <EyeIcon />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-slate-800">
            <Undo2 />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-slate-800">
            <Redo2 />
          </Button>
          <div className="flex flex-col items-center mr-4">
            <div className="flex flex-row items-center gap-4">
              Rascunho
              <Switch disabled defaultChecked />
              Publicar
            </div>
            <span className="text-muted-foreground text-xs">
              Ultima atualização {new Date().toLocaleDateString()}
            </span>
          </div>
          <Button onClick={handleOnSave}>Salvar</Button>
        </aside>
      </nav>
    </div>
  );
}
