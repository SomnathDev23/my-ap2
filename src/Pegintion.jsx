import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Posts from './Posts';
import PagePagination from './PagePagination';
const Pegintion = () => {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] =useState(false);
   const [currentPage,setCurrentPage] =useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect (()=> {
        const fetchPosts = async () => {
            setLoading(true);
            const res =await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[]);
    //Get Current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//change page
const peginate = (pageNumber)=> setCurrentPage(pageNumber)
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <PagePagination postsPerPage={postsPerPage} totalPosts={posts.length} peginate={peginate}></PagePagination>
    </div>
  )
}

export default Pegintion
