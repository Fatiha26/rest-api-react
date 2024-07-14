import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';
import Comments from './Comments';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      setPost(post);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <Comments postId={id} />
    </div>
  );
};

export default PostDetail;
