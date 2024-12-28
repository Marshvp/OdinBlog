import { BubbleMenu } from "@tiptap/react";
import { Bold, Dot, Heading1, Heading2, Heading3, Italic, ListOrdered, Strikethrough } from "lucide-react";
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
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${editor.isActive('orderedList') ? 'bg-blue-500 text-white' : 'bg-white'}`}>

          <ListOrdered />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : 'bg-white'}`}>

          <Heading1 />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'bg-white'}`}>

          <Heading2 />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-500 text-white' : 'bg-white'}`}>

          <Heading3 />
        </button>
      </BubbleMenu>
    </>
  )

}

MyBubbleMenu.propTypes = {
  editor: PropTypes.object,
}
