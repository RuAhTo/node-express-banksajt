import { Link } from 'react-router-dom'
// Landningssidan

function HomePage() {


    return (
        <div>
            <h1 className='p-2 m-2 flex justify-center'>Home</h1>
            <div className='flex justify-evenly'>
                <Link className='bg-blue-500 p-2 m-1 rounded-lg' to="/users">Skapa användare</Link>
                <Link className='bg-blue-500 p-2 m-1 rounded-lg' to="/signup">Registrera dig</Link>
                <Link className='bg-blue-500 p-2 m-1 rounded-lg' to="/login">Logga in</Link>
                <Link className='bg-blue-500 p-2 m-1 rounded-lg' to="/account">Mitt konto</Link>
            </div>
        </div>
    )
}

export default HomePage