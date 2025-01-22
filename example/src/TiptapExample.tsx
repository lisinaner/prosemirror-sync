import { useTiptapSync } from "@convex-dev/prosemirror-sync/tiptap";
import { EditorContent, EditorProvider } from "@tiptap/react";
import { extensions } from "./extensions";
import { api } from "../convex/_generated/api";

export function TipTapExample(props: { id: string }) {
  const sync = useTiptapSync(api.example, props.id, { debug: true });
  if (!sync.isLoading && sync.initialContent === null) {
    sync.create({ type: "doc", content: [] });
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
