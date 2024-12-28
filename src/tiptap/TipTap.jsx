import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MyBubbleMenu from "./MyBubbleMenu"
import BulletList from "@tiptap/extension-bullet-list"
import ListItem from "@tiptap/extension-list-item"


const CreateBlogTipTap = () => {
  const testEditor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      ListItem
    ],
    content: '<p>Hello Marshall</p> <br><br><br><br><br>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none bg-white rounded p-2 list-disc list-inside',
      }
    },
  })

  return (
    <div>
      <EditorContent editor={testEditor} />
      <MyBubbleMenu editor={testEditor} />
    </div>
  )
}

export default CreateBlogTipTap
