// import React, { Component, ReactNode, useState } from "react";
// import { render } from "react-dom";
// import {
//   SortableContainer,
//   SortableElement,
//   SortableElementProps,
//   SortableHandle,
// } from "react-sortable-hoc";
// import { arrayMoveImmutable } from "array-move";

// type SortableItemProp = {
//   value: any;
// };

// interface SortableListProp extends SortableElementProps {
//   items: Array<any>;
// }

// interface SortableListState {
//   sortedList: Array<any>;
// }

// const DragHandle = SortableHandle(() => <span>::</span>);

// const SortableItem = SortableElement(({ value }: SortableItemProp) => (
//   <div>
//     <DragHandle />
//     <li>{value}</li>
//   </div>
// ));

// const Container = SortableContainer(({ children }: any) => {
//   return <ul>{children}</ul>;
// });

// export default class SortableList extends React.Component<
//   SortableListProp,
//   SortableListState
// > {
//   constructor(props: SortableListProp) {
//     super(props);
//     this.state = {
//       sortedList: props.items ? props.items : [],
//     };
//   }
//   //   const [sortedList, setSortedList] = useState([]);

//   sortList = ({
//     oldIndex,
//     newIndex,
//   }: {
//     oldIndex: number;
//     newIndex: number;
//   }) => {
//     this.setState(({ sortedList }) => ({
//       ...this.state,
//       sortedList: arrayMoveImmutable(sortedList, oldIndex, newIndex),
//     }));
//   };

//   render() {
//     const { sortedList } = this.state;
//     return (
//       <Container useDragHandle onSortEnd={this.sortList}>
//         {sortedList}
//       </Container>
//     );
//   }
// }

// //     return (
// //       <ul>
// //         {items.map((value, index) => (
// //           <SortableItem key={`item-${value}`} index={index} value={value} />
// //         ))}
// //       </ul>
// //     );
// //   })
