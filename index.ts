// import LinkedList from './DS/LinkedList';

// const List = new LinkedList(5);

// List.pop();
// List.push(5);

// // List.unshift(4);
// // List.push(6);
// console.log(List);

import DoublyLinkedList from "./DS/DoublyLinkedList";

const List = new DoublyLinkedList(5);
List.push(6);
List.push(7);

// List.unshift(4);
// List.pop();
List.shift();
console.log(List);
