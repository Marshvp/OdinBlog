import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MyBubbleMenu from "./MyBubbleMenu"



const CreateBlogTipTap = () => {
  const testEditor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello Marshall</p> <br><br><br><br><br>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none bg-white rounded p-2',
      }
    }
  })

  return (
    <div>
      <EditorContent editor={testEditor} />
      <MyBubbleMenu editor={testEditor} />
    </div>
  )
}

export default CreateBlogTipTap
