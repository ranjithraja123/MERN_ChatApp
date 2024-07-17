import React from 'react'
import Searchinput from './Searchinput'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div>
      <Searchinput />
      <div className='divider px-3'></div>
        <Conversations />
        {/* <LogoutButton /> */}
    </div>
  )
}

export default Sidebar


// STARTER
// import React from 'react'
// import Searchinput from './Searchinput'
// import Conversations from './Conversations'

// const Sidebar = () => {
//   return (
//     <div>
//       <Searchinput />
//       <div className='divider px-3'></div>
//         <Conversations />
//         {/* <LogoutButton /> */}
//     </div>
//   )
// }

// export default Sidebar

