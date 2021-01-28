import React, {useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {
  // holds posts
  const [posts, setPosts] = useState([]);

  // block ui while fetching data
  const [loading, setLoading] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  // holds number of posts per page
  const [postsPerPage, setpostsPerPage] = useState(10);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);
      console.log('hardy');
      setLoading(false);
    }

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      <h1>Pagination</h1>
    </div>
  )
}

export default App;

