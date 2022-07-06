// import React from 'react'

// for Hooks Section
import { useState, useRef, useReducer } from 'react';


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

// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {
    
// const handleChange = (event: React.FormEvent<HTMLDivElement>): void => {

// };

// return (
//     <div>
//     <h1>Hello {name} {description} </h1>
//     <div onChange={handleChange} />
//     </div>
// )
// }

// export default Hello;

// Hooks

// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

//     const [data, setData] = useState(42);

//     setData(24);
    
//     return (
//         <div>
//             <h1>Hello {name} {description} </h1>
//         </div>
//     )   
// }   


// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

//     const [data, setData] = useState<number | string | null>(42);

//     setData(24);
//     setData("space");
//     setData(null);

//     return (
//         <div>
//             <h1>Hello {name} {description} </h1>
//         </div>
//     )   
// }   


// Object Type

// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

//     const [data, setData] = useState< {age: number} >( {age: 42} );

//     setData({age: 99 });


//     return (
//         <div>
//             <h1>Hello {name} {description} </h1>
//         </div>
//     )   
// } 

// Object Type with interface

// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

//     const [data, setData] = useState< {age: number | null; name?: string; department?: string | number} >( {age: 42, name: "Ali", department: "IT", } );

//     setData({age: 99 });


//     return (
//         <div>
//             <h1>Hello {name} {description} </h1>
//         </div>
//     )   
// } 

// interface 

// interface dataNode {
//     age: number | null; 
//     x?: string; 
//     y?: string | number;
// };

// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

//     const [data, setData] = useState< dataNode >( {age: 42, x: "Ali", y: "IT", } );

//     setData({age: 99, x:"Ali", y: 123 });

//     return (
//         <div>
//             <h1>Hello {name} {description} </h1>
//         </div>
//     )   
// }

// export default Hello;

// useRef

// const Hello: React.FC<IHelloProps> = ( { name, description="desc" } ) => {

//     const inputRef = useRef<HTMLInputElement>(null);
//     const divRef = useRef<HTMLDivElement>(null);
//     const buttonRef = useRef<HTMLButtonElement>(null);

//     return (
//         <div ref={divRef}>
//             <h1>Hello {name} {description} </h1>
//             <input type="text" ref={inputRef} />
//             <button ref={buttonRef}> Button </button>
//         </div>
//     )   
// }

// export default Hello;


// useReducer

interface Note {
    content: string;
}

type Actions = {type: "add", content: string} | {type: "remove", id: number}

// type State = Note[];

const NotesReducer = (state: Note[], action: Actions) => {
    switch(action.type){
        case "add":
            return [...state, {content: action.content}]
        case "remove":
            return state.filter( (_ , i) => action.id !== i)
        default:
            return [...state];
    }
}

const Hello: React.FC = ( {  } ) => {

    const [notes, dispatch] = useReducer(NotesReducer, [])

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={ () => {
                dispatch({
                    type: "add",
                    content: "Note 1",
                })
            }}>Button </button>

        </div>
    )   
}

export default Hello;