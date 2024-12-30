import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MyBubbleMenu from "./MyBubbleMenu"
import BulletList from "@tiptap/extension-bullet-list"
import ListItem from "@tiptap/extension-list-item"
import Image from "@tiptap/extension-image"
import Highlight from "@tiptap/extension-highlight"
import { useCallback, useState } from "react"
import MyFloatingMenu from "./MyFloatingMenu"
import SaveBlogFetch from "../api/SaveBlogFetch"


const CreateBlogTipTap = () => {

  const [title, setTitle] = useState("");
  const [blogData, setBlogData] = useState(null);
  const { data, loading, errors } = SaveBlogFetch(blogData)


  const testEditor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      ListItem,
      Image,
      Highlight,
    ],
    content: '<p>Hello Marshall</p> <br><br><br><br><br>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none bg-white rounded p-2 list-disc list-inside',
      }
    },
  })

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      testEditor.chain().focus().setImage({ src: url }).run()
    }
  }, [testEditor])
  if (!testEditor) {
    return null
  }

  const saveContentAsHTML = () => {
    if (!testEditor) return null;
    const HTMLContent = testEditor.getHTML()
    const titleHtml = `${title}.html`
    const htmlData = new FormData();
    htmlData.append('file', new Blob([HTMLContent]), { type: 'text/html' }, titleHtml)

    setBlogData(htmlData)

  }


  return (
    <div className="editorContainer flex flex-col items-center ">
      <div className="">
        <button onClick={addImage}>Set Image</button>
      </div>
      <div>
        <h1>
          Blog Title
        </h1>
        <input type="text" name="title" id="title" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
      </div>
      <div className="w-full flex justify-center">
        <EditorContent editor={testEditor} className="max-w-4xl w-full" />
      </div>
      <MyBubbleMenu editor={testEditor} />
      <MyFloatingMenu editor={testEditor} />
      <button onClick={saveContentAsHTML}>Save Blog</button>
    </div>
  )
}

export default CreateBlogTipTap
