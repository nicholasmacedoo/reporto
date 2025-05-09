import type { EditorElement } from "@/pages/providers/editor/editor-provider";
import { TextComponent } from "./text";

interface Props {
  element: EditorElement;
}

export function Recursive({ element }: Props) {
  switch (element.type) {
    case "text":
      return <TextComponent element={element} />;
    default:
      return null;
  }
}
