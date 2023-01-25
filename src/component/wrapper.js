import { useEffect, useState } from "react"
import Posts from './Post';
import Navig from './Nav';


const Wrapper = () => {
    const [serverResponse, setServerResponse] = useState('');
    const fetchAllPosts = async () => {
        const resp = await fetch('https://ultramarine-firefly-vest.cyclic.app/posts')
        setServerResponse(await resp.json())

    }

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const userPost = Array.isArray(serverResponse.result)
        ? serverResponse.result.map(post => <Posts data={post} key={post.id} />)
        : null;

  
    return (
        <>
            <Navig />
            <div className='parent-container'>
                <div className='container'>
                    {userPost}
                </div>

            </div>
        </>
    )
}
export default Wrapper;