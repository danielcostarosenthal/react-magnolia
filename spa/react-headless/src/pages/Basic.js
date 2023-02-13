import { EditableArea } from '@magnolia/react-editor'
import React from 'react'

const Basic = ({ main }) => {
	return main && <EditableArea className='Basic' content={main} />
}

export default Basic

// const Basic = (props) => {
//   const { main, title } = props

//   return (
//     <div className="Basic">
//       <div className="hint">[Basic Page]</div>
//       <h1>{title || props.metadata["@name"]}</h1>

//       <main>
//         <div className="hint">[Main Area]</div>
//         {main && <EditableArea className="Area" content={main} />}
//       </main>
//     </div>
//   )
// }

// export default Basic
