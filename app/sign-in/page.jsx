import {SignIn} from '@stackframe/stack'
import Link from 'next/link'

export default function SignInPage() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
            <div className='max-w-md w-full space-y-8'>
                <SignIn/>
                <Link  href='/'>Go Back Home</Link>
            </div>
        </div>
    )
}