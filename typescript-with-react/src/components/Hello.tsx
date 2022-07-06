import React from 'react'

// Props

// export default function Hello( { name }: {name: string} ) {
//   return (
//     <div>
//       <h1>Hello {name} </h1>
//     </div>
//   );
// };


// with interface

// Aşağıdaki kullanım çok hoş değildir.
// export default function Hello( { name, description, label }: {name: string, description: string, label: string} ) {
//   return (
//     <div>
//       <h1>Hello {name} </h1>
//     </div>
//   );
// };

interface IHelloProps {
    name: string;
    description?: string;
    label?: string;
    // onSmthHappen: (name: string) => void;
};

// export default function Hello( { name, description, label }: IHelloProps ) {
//   return (
//     <div>
//       <h1>Hello {name} </h1>
//     </div>
//   );
// };

// Fonksiyona tip atamak

//  !!!!!!!!!!!!!!!!!!!!!
// export default function Hello ( { name, description, label } ) {
//   return (
//     <div>
//       <h1>Hello {name} </h1>
//     </div>
//   )
// }
// !!!!!!!!!!!!!!!!!!!!

// const Hello: React.FC<IHelloProps> = ( { name, description="desc", label } ) => {
//       return (
//         <div>
//           <h1>Hello {name} {description} </h1>
//           {/* {onSmthHappen(name)} */}
//         </div>
//       )
//     }

// export default Hello;


//  Event 

// input
// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {
    
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//         // event.target.value
//     };

//     return (
//       <div>
//         <h1>Hello {name} {description} </h1>
//         <input type="text" onChange={handleChange} />
//       </div>
//     )
//   }

// export default Hello;

// div

const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {
    
const handleChange = (event: React.FormEvent<HTMLDivElement>): void => {

};

return (
    <div>
    <h1>Hello {name} {description} </h1>
    <div onChange={handleChange} />
    </div>
)
}

export default Hello;