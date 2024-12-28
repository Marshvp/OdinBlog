import BulletList from "@tiptap/extension-bullet-list";
import { BubbleMenu } from "@tiptap/react";
import { Bold, Dot, Italic, Strikethrough } from "lucide-react";
import PropTypes from "prop-types";

export default function MyBubbleMenu({ editor }) {

  if (!editor) {
    return null;
  }

  return (
    <>
      <BubbleMenu editor={editor}
        tippyOptions={100}
        className="bg-blogGrey shadow-lg rounded p-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-white'}`}>
          <Bold />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-white'}`}>

          <Italic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 rounded ${editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-white'}`}>

          <Strikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-white'}`}>

          <Dot />
        </button>
      </BubbleMenu>
    </>
  )

}

MyBubbleMenu.propTypes = {
  editor: PropTypes.object,
}
