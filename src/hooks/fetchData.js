import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { postsActions } from '../store/posts';

export default function useFetchData() {
    const pageNumber = useSelector((state) => state.page.page);
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({error: false, message: ""});


  useEffect(() => {

    async function getData(pageNumber){
        setIsLoading(true);
        const pageNumberReq = pageNumber - 1;

        const url = "https://internship-service.onrender.com/videos?page=" + pageNumberReq

        try {
          const res = await fetch(url);

          if(!res.ok){
              setIsError({error: true, message: "Something went wrong, can't fetch posts"});
              setIsLoading(false);
          } else {
            const results = await res.json();
            const posts = results.data.posts;
            dispatch(postsActions.addPosts(posts));
            setIsLoading(false);
          }

        } catch (e) {
              setIsError({error: true, message: "Something went wrong, can't fetch posts"});
              setIsLoading(false);
        }


    }


    getData(pageNumber);

  }, [pageNumber])

  return {
    isLoading,
    isError
  }
}
