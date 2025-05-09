import type { DeviceTypes, EditorElement } from "./editor-provider";

export type EditorAction =
  | {
      type: "ADD_ELEMENT";
      payload: {
        containerId: string;
        elementDetails: EditorElement;
      };
    }
  | {
      type: "UPDATE_ELEMENT";
      payload: {
        elementDetails: EditorElement;
      };
    }
  | {
      type: "DELETE_ELEMENT";
      payload: {
        elementDetails: EditorElement;
      };
    }
  | {
      type: "CHANGE_CLICKED_ELEMENT";
      payload: {
        elementDetails?: EditorElement;
      };
    }
  | {
      type: "CHANGE_DEVICE";
      payload: {
        device: DeviceTypes;
      };
    }
  | { type: "REDO" }
  | { type: "UNDO" }
  | {
      type: "LOAD_LOCALSTORAGE";
      payload: {
        pageId: string;
      };
    }
  | {
      type: "LOAD_DATA";
      payload: {
        elements: EditorElement;
        withLive: boolean;
      };
    }
  | {
      type: "SET_PAGE_ID";
      payload: {
        pageId: string;
      };
    };
