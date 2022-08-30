// import React from 'react';
// import { Table } from 'semantic-ui-react'
// import { useEffect, useState } from 'react';

// export default function Read() {

//     const [APIData, setAPIData] = useState([]);
//     useEffect(() => {
//         // axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
//         //     .then((response) => {
//         //         setAPIData(response.data);
//         //     })
//     }, [])

//     const onDelete = (id) => {
//         axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
//       }

//     return (
//         <div>
//             <Table singleLine>
//                 <Table.Header>
//                     <Table.Row>
//                         <Table.HeaderCell>First Name</Table.HeaderCell>
//                         <Table.HeaderCell>Last Name</Table.HeaderCell>
//                         <Table.HeaderCell>Checked</Table.HeaderCell>
//                     </Table.Row>

//                 </Table.Header>

//                 <Table.Body>
//                     <Table.Row>
//                         <Table.Cell>Nishant</Table.Cell>
//                         <Table.Cell>Kumar</Table.Cell>
//                         <Table.Cell>Yes</Table.Cell>
//                         <Link to='/update'>
//   <Table.Cell> 
//      <Button>Update</Button>
//    </Table.Cell>
// </Link>
//                         <Table.Cell>
//    <Button onClick={() => onDelete(data.id)}>Delete</Button>
// </Table.Cell>
//                     </Table.Row>
                    
//                 </Table.Body>
//                 {/* <Table.Body>
//   {APIData.map((data) => {
//      return (
//        <Table.Row>
//           <Table.Cell>{data.firstName}</Table.Cell>
//            <Table.Cell>{data.lastName}</Table.Cell>
//            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
//         </Table.Row>
//    )})}
// </Table.Body> */}
//             </Table>
//         </div>
//     )
// }