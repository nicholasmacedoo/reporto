import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useEditor } from "@/pages/providers/editor/editor-provider";

type Props = {};
export function SettingsTab(props: Props) {
  const { state, dispatch } = useEditor();

  function handleCustomValues(e: any) {
    const settingProperty = e.target.id;
    let value = e.target.value;

    const styleObject = {
      [settingProperty]: value,
    };

    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        elementDetails: {
          ...state.editor.selectedElement,
          content: {
            ...state.editor.selectedElement.content,
            ...styleObject,
          },
        },
      },
    });
  }

  function handleOnChanges(e: any) {
    const settingProperty = e.target.id;
    let value = e.target.value;

    const styleObject: { [key: string]: string } = {
      [settingProperty]: value,
    };

    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        elementDetails: {
          ...state.editor.selectedElement,
          content: {
            ...state.editor.selectedElement.styles,
            ...styleObject,
          },
        },
      },
    });
  }

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={["Typography", "Dimensions", "Decorations", "Flexbox"]}
    >
      <AccordionItem value="Custom" className="px-6 py-0">
        <AccordionTrigger className="!no-underline">
          Customizar
        </AccordionTrigger>
        <AccordionContent>
          {state.editor.selectedElement.type === "link" &&
            !Array.isArray(state.editor.selectedElement.content) && (
              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground">Link do caminho</p>
                <Input
                  id="href"
                  placeholder="https://dominio.exemplo.com/nome-da-pasta"
                  onChange={handleCustomValues}
                  value={state.editor.selectedElement.content.href}
                />
              </div>
            )}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Typography" className="px-6 py-0 border-y-[1px]">
        <AccordionTrigger className="!no-underline">
          Tipografia
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">Cor</p>
            <Input
              id="color"
              onChange={handleOnChanges}
              value={state.editor.selectedElement.styles.color}
            />
          </div>
          <div>
            <Label className="text-muted-foreground">Opacidade</Label>
            <div className="flex items-center justify-end">
              <small className="p-2">
                {typeof state.editor.selectedElement.styles?.opacity ===
                "number"
                  ? state.editor.selectedElement.styles?.opacity
                  : parseFloat(
                      (
                        state.editor.selectedElement.styles?.opacity ?? "0"
                      ).replace("%", "")
                    ) || 0}
                %
              </small>
            </div>
            <Slider
              onValueChange={(e) => {
                handleOnChanges({
                  target: {
                    id: "opacity",
                    value: `${e[0]}%`,
                  },
                });
              }}
              defaultValue={[]}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
