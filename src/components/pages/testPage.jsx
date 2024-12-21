import useAuth from "../../hooks/auth/VerifyToken";



export default function TestComponent() {
  useAuth();

  return (
    <div>
      <h1>Test page</h1>
      <div>TestPadding</div>
    </div>
  )
}
