import React, {useState, useEffect} from 'react';

export function Page(props) {

// Piece of State to hold the page data
  const [pageData, setPageData] = useState({});

  async function fetchPageData(){
    const response = await fetch(`http://localhost:1234/wiki/${props.page.slug}`);
    console.log("resposne", response);
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


{/* ************************  AUTHOR  ******************************** */}

    
{/* ************** CURRENT PAGE:   Title, Content + Back Button  **********************/}
    {props.currentPageTitle === props.page.title && 
      <>
        <h3>{props.page.title}</h3>
        <p><b>Published:</b> {props.page.createdAt}</p>
        <p>{props.page.content}</p>
        <button
          onClick={() => props.setCurrentPageTitle('')}>
            Back to Wiki List
        </button>
      </>
    }

  </>
} 
	