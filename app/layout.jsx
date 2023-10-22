import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Login from './login/page'

export const metadata = {
    title: 'MySavings',
    description: 'MySavings'
}

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body className='body'>
            <Login />
            {children}
        </body>
    </html>
  )
}

export default layout