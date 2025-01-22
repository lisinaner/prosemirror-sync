import { EditorContent, EditorProvider } from "@tiptap/react";
import { api } from "../convex/_generated/api";

import { JSONContent } from "@tiptap/core";
import { useTiptapSync } from "@convex-dev/prosemirror-sync/tiptap";
import { extensions } from "./extensions";

const EMPTY_DOC: JSONContent = { type: "doc", content: [] };

export function TipTapExample(props: { id: string }) {
  const sync = useTiptapSync(api.example, props.id, { debug: true });
  if (!sync.isLoading && sync.initialContent === null) {
    sync.create(EMPTY_DOC);
  }
  return sync.initialContent !== null ? (
    <EditorProvider
      content={sync.initialContent}
      extensions={[...extensions, sync.extension]}
    >
      <EditorContent editor={null} />
    </EditorProvider>
  ) : (
    <p>Loading...</p>
  );
}
