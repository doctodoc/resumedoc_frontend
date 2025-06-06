import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowClockwise,
  ArrowCounterClockwise,
  Code as CodeIcon,
  CodeBlock as CodeBlockIcon,
  HighlighterCircle,
  Image as ImageIcon,
  KeyReturn,
  LinkSimple,
  ListBullets,
  ListNumbers,
  Minus,
  Paragraph as ParagraphIcon,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextAUnderline,
  TextB,
  TextHOne,
  TextHThree,
  TextHTwo,
  TextIndent,
  TextItalic,
  TextOutdent,
  TextStrikethrough,
} from "@phosphor-icons/react";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Highlight } from "@tiptap/extension-highlight";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import {
  Editor,
  EditorContent,
  EditorContentProps,
  useEditor,
} from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { forwardRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Button } from "../ui/Button";
import { cn } from "@/utils";
import { Tooltip } from "../ui/ToolTip";
import { Popover, PopoverContent } from "../ui/PopOver";
import { Skeleton } from "../ui/Skeleton";
import { Toggle } from "../ui/Toggle";

const InsertImageFormSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
});

type InsertImageFormValues = z.infer<typeof InsertImageFormSchema>;

type InsertImageProps = {
  onInsert: (value: InsertImageFormValues) => void;
};

// const InsertImageForm = ({ onInsert }: InsertImageProps) => {
//   const form = useForm<InsertImageFormValues>({
//     resolver: zodResolver(InsertImageFormSchema),
//     defaultValues: { src: "", alt: "" },
//   });

//   const onSubmit = (values: InsertImageFormValues) => {
//     onInsert(values);
//     form.reset();
//   };

//   return (
//     <Form {...form}>
//       <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
//         <p className="prose prose-sm prose-zinc dark:prose-invert">
//           Insert an image from an external URL and use it on your resume.
//         </p>

//         <FormField
//           name="src"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>URL</FormLabel>
//               <FormControl>
//                 <Input placeholder="https://..." {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           name="alt"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <div className="!mt-5 ml-auto max-w-fit">
//           <Button type="submit" variant="secondary" size="sm">
//             Insert Image
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };

const Toolbar = ({ editor }: { editor: Editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="flex flex-wrap gap-0.5 border p-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        disabled={!editor.can().chain().toggleBold().run()}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Tooltip content="Bold">
          <TextB />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Tooltip content="Italic">
          <TextItalic />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("paragraph")}
        onPressedChange={() => editor.chain().focus().setParagraph().run()}
      >
        <Tooltip content="Paragraph">
          <ParagraphIcon />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: "left" })}
        disabled={!editor.can().chain().focus().setTextAlign("left").run()}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("left").run()
        }
      >
        <Tooltip content="Align Left">
          <TextAlignLeft />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: "center" })}
        disabled={!editor.can().chain().focus().setTextAlign("center").run()}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("center").run()
        }
      >
        <Tooltip content="Align Center">
          <TextAlignCenter />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: "right" })}
        disabled={!editor.can().chain().focus().setTextAlign("right").run()}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("right").run()
        }
      >
        <Tooltip content="Align Right">
          <TextAlignRight />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: "justify" })}
        disabled={!editor.can().chain().focus().setTextAlign("justify").run()}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("justify").run()
        }
      >
        <Tooltip content="Align Justify">
          <TextAlignJustify />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <Tooltip content="Bullet List">
          <ListBullets />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <Tooltip content="Numbered List">
          <ListNumbers />
        </Tooltip>
      </Toggle>

      <Button
        size="sm"
        variant="ghost"
        className="px-2"
        disabled={!editor.can().chain().focus().liftListItem("listItem").run()}
        onClick={() => editor.chain().focus().liftListItem("listItem").run()}
      >
        <Tooltip content="Outdent">
          <TextOutdent />
        </Tooltip>
      </Button>

      <Button
        size="sm"
        variant="ghost"
        className="px-2"
        disabled={!editor.can().chain().focus().sinkListItem("listItem").run()}
        onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
      >
        <Tooltip content="Indent">
          <TextIndent />
        </Tooltip>
      </Button>

      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Tooltip content="Strikethrough">
          <TextStrikethrough />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("underline")}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Tooltip content="Underline">
          <TextAUnderline />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("highlight")}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
        onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
      >
        <Tooltip content="Highlight">
          <HighlighterCircle />
        </Tooltip>
      </Toggle>

      <Button
        type="button"
        size="sm"
        variant="ghost"
        className="px-2"
        onClick={setLink}
      >
        <Tooltip content="Hyperlink">
          <LinkSimple />
        </Tooltip>
      </Button>

      <Toggle
        size="sm"
        pressed={editor.isActive("code")}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        onPressedChange={() => editor.chain().focus().toggleCode().run()}
      >
        <Tooltip content="Inline Code">
          <CodeIcon />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("codeBlock")}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Tooltip content="Code Block">
          <CodeBlockIcon />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 1 })}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
        }
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Tooltip content="Heading 1">
          <TextHOne />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 2 })}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Tooltip content="Heading 2">
          <TextHTwo />
        </Tooltip>
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 3 })}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
        }
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Tooltip content="Heading 3">
          <TextHThree />
        </Tooltip>
      </Toggle>

      {/* <Popover>
        <Tooltip content="Insert Image">
          <PopoverTrigger asChild>
            <Button size="sm" variant="ghost" className="px-2">
              <ImageIcon />
            </Button>
          </PopoverTrigger>
        </Tooltip>
        <PopoverContent className="w-80">
          <InsertImageForm onInsert={(props) => editor.chain().focus().setImage(props).run()} />
        </PopoverContent>
      </Popover> */}

      <Button
        size="sm"
        variant="ghost"
        className="px-2"
        disabled={!editor.can().chain().focus().setHardBreak().run()}
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <Tooltip content="Insert Break Line">
          <KeyReturn />
        </Tooltip>
      </Button>

      <Button
        size="sm"
        variant="ghost"
        className="px-2"
        disabled={!editor.can().chain().focus().setHorizontalRule().run()}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <Tooltip content="Insert Horizontal Rule">
          <Minus />
        </Tooltip>
      </Button>

      <Tooltip content="Undo">
        <Button
          size="sm"
          variant="ghost"
          className="px-2"
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <ArrowCounterClockwise />
        </Button>
      </Tooltip>

      <Tooltip content="Redo">
        <Button
          size="sm"
          variant="ghost"
          className="px-2"
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <ArrowClockwise />
        </Button>
      </Tooltip>
    </div>
  );
};

type RichInputProps = {
  content?: string;
  onChange?: (value: string) => void;
  hideToolbar?: boolean;
  className?: string;
  editorClassName?: string;
  footer?: (editor: Editor) => React.ReactNode;
} & Omit<
  EditorContentProps,
  "ref" | "editor" | "content" | "value" | "onChange" | "className"
>;

export const RichInput = forwardRef<Editor, RichInputProps>(
  (
    {
      content,
      onChange,
      footer,
      hideToolbar = false,
      className,
      editorClassName,
      ...props
    },
    _ref
  ) => {
    const editor = useEditor({
      extensions: [
        StarterKit,
        Image,
        Underline,
        Highlight,
        TextAlign.configure({ types: ["heading", "paragraph"] }),
        Link.extend({ inclusive: false }).configure({ openOnClick: false }),
      ],
      editorProps: {
        attributes: {
          class: cn(
            "prose prose-sm prose-zinc max-h-[200px] max-w-none overflow-y-scroll dark:prose-invert focus:outline-none [&_*]:my-2",
            editorClassName
          ),
        },
      },
      content,
      parseOptions: { preserveWhitespace: "full" },
      onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
    });

    if (!editor) {
      return (
        <div className="space-y-2">
          <Skeleton
            className={cn("h-[42px] w-full", hideToolbar && "hidden")}
          />
          <Skeleton className="h-[90px] w-full" />
        </div>
      );
    }

    return (
      <div>
        {!hideToolbar && <Toolbar editor={editor} />}

        <EditorContent
          editor={editor}
          className={cn(
            "grid min-h-[160px] w-full rounded-sm border bg-transparent px-3 py-2 text-sm placeholder:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
            hideToolbar && "pt-2",
            className
          )}
          {...props}
        />

        {footer?.(editor)}
      </div>
    );
  }
);

RichInput.displayName = "RichInput";
