import React from 'react'

const card = (props) => {

  console.log(props.user, props.age);

  return (
      <div className='card'>
      <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      <h1>hadiya mazhar</h1>   
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ducimus.</p> 
      <button>view profile</button>
    </div>
  )
}

export default card