import { JSONContent } from "@tiptap/react";
import { api } from "../convex/_generated/api";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useBlockNoteSync } from "@convex-dev/prosemirror-sync/blocknote";

const EMPTY_DOC: JSONContent = {
  type: "doc",
  content: [],
};

export function BlockNoteExample(props: { id: string }) {
  const sync = useBlockNoteSync(api.example, props.id, { debug: true });
  if (!sync.isLoading && sync.editor === null) {
    sync.create(EMPTY_DOC);
  }
  return sync.editor ? (
    <BlockNoteView editor={sync.editor} />
  ) : (
    <div>Loading...</div>
  );
}
