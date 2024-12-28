import useCheckAdmin from "../../../hooks/auth/VerifyAdmin";
import CreateBlogTipTap from "../../../tiptap/TipTap";


export default function CreateBlog() {

  // const { isAdmin, loading, error } = useCheckAdmin();
  //
  // if (loading) {
  //   return <div>Loading...</div>
  // }
  //
  // if (error) {
  //   return <div>Error: {error}</div>
  // }
  //
  // if (!isAdmin) {
  //   return null
  // }
  return (
    <div className="container flex relative flex-col align-center justify-center mx-auto">
      <h1>Create a Post</h1>
      <CreateBlogTipTap />
    </div>
  )
}

