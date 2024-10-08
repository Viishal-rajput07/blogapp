import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { Container, PostCard, Loader } from '../components'
import  {useSelector} from 'react-redux'


function Home() {

    const authStatus = useSelector((state) => state.auth.status)

    const[loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
        .finally(()=> setLoading(false))
    }, [])

    if(loading){
        return (
            <Loader />
        )
    }
    else if (posts.length === 0 || authStatus === false)  {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else{
        return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>)
    }
}

export default Home