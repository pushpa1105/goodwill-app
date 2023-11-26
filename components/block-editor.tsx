"use client"; // this registers <Editor> as a Client Component

import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  lightDefaultTheme,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { useState } from "react";

interface BlockEditorProps {
  onChange?: (value: any) => void;
  value: any;
  isPreview?: boolean;
}

// Our <Editor> component we can reuse later
export default function BlockEditor({
  onChange = (value) => {},
  value,
  isPreview = false,
}: BlockEditorProps) {
  // const [blocks, setBlocks] = useState<any>(null);
  // const [markdown, setMarkdown] = useState<string>("");

  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    editable: !isPreview,
    initialContent: value ?? null,
    onEditorContentChange: async (editor: BlockNoteEditor) => {
      // const saveBlocksAsMarkdown = async () => {
      //   const markdown: string = await editor.blocksToMarkdown(
      //     editor.topLevelBlocks
      //   );
      //   setMarkdown(markdown);
      // };
      // saveBlocksAsMarkdown();
      // if (!isPreview && onChange) {
      // console.log(editor.topLevelBlocks);
      onChange(editor.topLevelBlocks);
      // }
      // console.log(blocks);
    },
  });

  // const preview: BlockNoteEditor | null = useBlockNote({
  //   editable: false,
  //   initialContent: blocks,
  // });
  // use reactmarkdown and pass the markdown version of the notes as props

  // Renders the editor instance using a React component.
  return (
    <>
      <BlockNoteView
        editor={editor}
        theme={lightDefaultTheme}
        className="custom-block-editor mb-8"
      />
    </>
  );
}
