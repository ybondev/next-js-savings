import { isLoggedIn } from "@utils/auth"

const Home = () => {
  return (
    <>
     <div>
      <h1>Home Page</h1>
      {isLoggedIn() ? (
        <p>Welcome, you are logged in!</p>
      ) : (
        <p>
          Please <Link href="/login">login</Link> to access this page.
        </p>
      )}
    </div>
    </>
  )
}

export default Home