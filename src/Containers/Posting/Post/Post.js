import React from "react";
import { Posts } from "../../../Components/Posts/Posts";
import { Posts1 } from "../../../Components/Posts/Posts";

export const Post = () => {
const blogPosts = [
    {
        title: 'Intro',
        body: `There are many real-life examples of 
        a stack. Consider an example of plates stacked 
        over one another in the canteen. The plate 
        which is at the top is the first one to be 
        removed, i.e. the plate which has been placed 
        at the bottommost position remains in the 
        stack for the longest period of time. So, it 
        can be simply seen to follow LIFO(Last In 
        First Out)/FILO(First In Last Out) order.`,
        username: 'PurpleRAIN',
        imgUrl: '',
        comment: {
          name: 'florian',
          comments: 'hello world',
        }
    },
    {
      title: 'Intro',
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked  
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
      username: 'PurpleRAIN',
      imgUrl: ''
  },
];
return (
    <div className="posts-container">
    {blogPosts.map((post, index) => (
      <Posts key={index} index={index} post={post} />
    ))}
  </div>

)
}

export const Post1 = () => {
  const blogPosts = [
      {
        title: 'morning',
        body: `There are many real-life examples of 
        First Out)/FILO(First In Last Out) order.`,
        username: 'chopBala',
        
      },
  ];
  return (
      <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Posts1 key={index} index={index} post={post} />
      ))}
    </div>
  
  )
      
  }