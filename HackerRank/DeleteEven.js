//Give a linked list of integers, return a linked list containing only nodes having odd integers in their node > data field
function deleteEven(listHead){

}
/*
 * Complete the 'deleteEven' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST listHead as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteEven(listHead) {
  // Convert linked list to array
  const nodeList = [];
  let current = listHead;
  while (current !== null) {
    nodeList.push(current.data);
    current = current.next;
  }

  // Filter out nodes with even integers
  const filteredList = nodeList.filter(data => data % 2 !== 0);

  // Convert filtered array to linked list
  let newHead = null;
  let tail = null;
  for (const data of filteredList) {
    const newNode = { data, next: null };
    if (newHead === null) {
      newHead = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return newHead;
}
