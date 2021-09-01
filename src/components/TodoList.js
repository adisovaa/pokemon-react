// import React, { useState, useEffect } from 'react';
// import firebase from '../services/firebase';
// import Todo from './ToDo';
//
// export default function TodoList() {
//     const [todoList, setTodoList] = useState();
//
//     useEffect(() => {
//         const pokemonRef = firebase.database().ref('Pokemon');
//         pokemonRef.on('value', (snapshot) => {
//             const todos = snapshot.val();
//             const todoList = [];
//             for (let id in todos) {
//                 todoList.push({ id, ...todos[id] });
//             }
//             setTodoList(todoList);
//         });
//     }, []);
//
//     return (
//         <div>
//             {todoList
//                 ? todoList.map((pokemon, index) => <Todo pokemon={pokemon} key={index} />)
//                 : ''}
//         </div>
//     );
// }