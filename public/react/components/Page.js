import React, {useState, useEffect} from 'react';
import apiURL from '../api';

export function Page(props) {

// Piece of State to hold the page data
  const [pageData, setPageData] = useState({});

  async function fetchPageData(){
    const response = await fetch(`${apiURL}/wiki/${props.page.slug}`)
    // console.log("response", response);
    const data = await response.json();
    console.log("data", data);
    setPageData(data);
  }

  useEffect( () => {
      fetchPageData();
  }, []);


  return <>
{/************************DISPLAY ALL TITLES *****************************/}
    {props.currentPageTitle === '' && 
      <h3 
        onClick={() => props.setCurrentPageTitle(props.page.title)}>
          {props.page.title}
      </h3>}

    
{/* ************** CURRENT PAGE:   Title, Content + Back Button  **********************/}
    {props.currentPageTitle === props.page.title && 
      <>
        <h3>{props.page.title}</h3>
        <p><b>Author:</b> {pageData.author.name}</p>
        <p><b>Published:</b> {props.page.createdAt}</p>
        <p>{props.page.content}</p>
        <p><b>Tags:</b></p>
        {pageData.tags.map((tag, idx) => <p key={idx}>{tag.name}</p>)}
        <button
          onClick={() => props.setCurrentPageTitle('')}>
            Back to Wiki List
        </button>
      </>
    }

  </>
} 
	