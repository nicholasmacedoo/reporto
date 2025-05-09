import { createContext, useContext, useReducer, type Dispatch } from "react";
import type { EditorBtns } from "../../../shared/constants";
import type { EditorAction } from "./editor-actions";

export type DeviceTypes = "Desktop" | "Mobile" | "Tablet";

export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  name: string;
  type: EditorBtns | null;
  content: EditorElement[] | { href?: string; innerText?: string };
};

export type Editor = {
  liveMode: boolean;
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceTypes;
  previewMode: boolean;
  pageId: string;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};

export type EditorState = {
  editor: Editor;
  history: HistoryState;
};

const initialEditorState: EditorState["editor"] = {
  elements: [
    {
      content: [],
      id: "__body",
      name: "Body",
      styles: {},
      type: "_body",
    },
  ],
  selectedElement: {
    id: "",
    content: [],
    name: "",
    styles: {},
    type: null,
  },
  device: "Desktop",
  liveMode: false,
  previewMode: false,
  pageId: "",
};

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};
const addAnElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "ADD_ELEMENT") {
    throw Error(
      "You sent the wrong action type to the Add Element editor State"
    );
  }

  return editorArray.map((item) => {
    if (item.id === action.payload.containerId && Array.isArray(item.content)) {
      return {
        ...item,
        content: [...item.content, action.payload.elementDetails],
      };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: addAnElement(item.content, action),
      };
    }
    return item;
  });
};
const updateAnElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "UPDATE_ELEMENT") {
    throw Error("You sent the wrong action type to the update Element State");
  }

  return editorArray.map((item) => {
    if (item.id === action.payload.elementDetails.id) {
      return { ...item, ...action.payload.elementDetails };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: updateAnElement(item.content, action),
      };
    }
    return item;
  });
};

export const editorReducer = (
  state: EditorState,
  action: EditorAction
): EditorState => {
  switch (action.type) {
    case "ADD_ELEMENT": {
      const updatedEditorState = {
        ...state.editor,
        elements: addAnElement(state.editor.elements, action),
      };
      // update the history to include the entire updated EditorState
      const updatedHistory = [
        ...state.history.history.slice(0, state.history.currentIndex + 1),
        { ...updatedEditorState }, // Save a copy of the updated state
      ];

      const newEditorState = {
        ...state,
        editor: updatedEditorState,
        history: {
          ...state.history,
          history: updatedHistory,
          currentIndex: updatedHistory.length - 1,
        },
      };

      return newEditorState;
    }

    case "UPDATE_ELEMENT": {
      console.log(state, action);
      const updatedElements = updateAnElement(state.editor.elements, action);
      const updatedElementIsSelected =
        state.editor.selectedElement.id === action.payload.elementDetails.id;

      const updatedEditorStateWithUpdate = {
        ...state.editor,
        elements: updatedElements,
        selectedElement: updatedElementIsSelected
          ? action.payload.elementDetails
          : {
              id: "",
              content: [],
              name: "",
              styles: {},
              type: null,
            },
      };

      const updatedHistoryWithUpdate = [
        ...state.history.history.slice(0, state.history.currentIndex + 1),
        { ...updatedEditorStateWithUpdate }, // Save a copy of the updated state
      ];

      const updatedEditor = {
        ...state,
        editor: updatedEditorStateWithUpdate,
        history: {
          ...state.history,
          history: updatedHistoryWithUpdate,
          currentIndex: updatedHistoryWithUpdate.length - 1,
        },
      };
      // @ts-ignore
      return updatedEditor;
    }

    // case "DELETE_ELEMENT": {
    //   const toDelete = action.payload.elementDetails;
    //   return {
    //     ...state,
    //     containers: Object.fromEntries(
    //       Object.entries(state.containers).map(([id, elements]) => [
    //         id,
    //         elements.filter((el) => el.id !== toDelete.id),
    //       ])
    //     ),
    //   };
    // }

    // case "CHANGE_CLICKED_ELEMENT": {
    //   return {
    //     ...state,
    //     clickedElement: action.payload.elementDetails || null,
    //   };
    // }

    // case "CHANGE_DEVICE": {
    //   return {
    //     ...state,
    //     device: action.payload.device,
    //   };
    // }

    // case "TOGGLE_PREVIEW_MODE": {
    //   return {
    //     ...state,
    //     isPreviewMode: !state.isPreviewMode,
    //   };
    // }

    // case "TOGGLE_LIVE_MODE": {
    //   return {
    //     ...state,
    //     isLiveMode: !state.isLiveMode,
    //   };
    // }

    // case "REDO": {
    //   if (state.redoStack.length === 0) return state;
    //   const nextState = state.redoStack[state.redoStack.length - 1];
    //   return {
    //     ...nextState,
    //     undoStack: [...state.undoStack, state],
    //     redoStack: state.redoStack.slice(0, -1),
    //   };
    // }

    // case "UNDO": {
    //   if (state.undoStack.length === 0) return state;
    //   const prevState = state.undoStack[state.undoStack.length - 1];
    //   return {
    //     ...prevState,
    //     redoStack: [...state.redoStack, state],
    //     undoStack: state.undoStack.slice(0, -1),
    //   };
    // }

    // case "LOAD_LOCALSTORAGE": {
    //   const data = action.payload.data; // você pode adaptar esse tipo
    //   return {
    //     ...state,
    //     ...data,
    //   };
    // }

    // case "LOAD_DATA": {
    //   const data = action.payload.data; // idem acima
    //   return {
    //     ...state,
    //     ...data,
    //   };
    // }

    // case "SET_PAGE_ID": {
    //   return {
    //     ...state,
    //     : action.payload.pageId,
    //   };
    // }

    default:
      return state;
  }
};
export type EditorContextData = {
  device: DeviceTypes;
  previewMode: boolean;
  setPreviewMode: (previewMode: boolean) => void;
  setDevice: (device: DeviceTypes) => void;
};

export const EditorContext = createContext<{
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
  pageId: string;
  pageDetails: null;
}>({
  state: initialState,
  dispatch: (() => {}) as Dispatch<EditorAction>,
  pageId: "",
  pageDetails: null,
});

type EditorProps = {
  children: React.ReactNode;
  pageId: string;
  pageDetails: null;
};

export const EditorProvider = (props: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider
      value={{
        state,
        dispatch,
        pageId: props.pageId,
        pageDetails: props.pageDetails,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);

  if (!context)
    throw new Error("useEditor hook mus be used within the editor Provider");

  return context;
};

export default EditorProvider;
