import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Footer from './components/Footer';


const App = () => {
  // holds posts
  const [posts, setPosts] = useState([]);

  // block ui while fetching data
  const [loading, setLoading] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  // holds number of posts per page
  const [postsPerPage] = useState(10);

  // gets Posts from jsonplaceholder when component Init
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
  }, []);


  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (number) => setCurrentPage(number);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      <Footer />
    </div>
  )
}

export default App;