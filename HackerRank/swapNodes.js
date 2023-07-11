//Given a linked list, swap every two adjacent nodes and return its head. 
//You must solve the problem without modifying the values in the list's node(i.e., only nodes themselves may be changed)

function swapPairs(head) {
  

}


function swapPair(head) {
    // Create a dummy node as the previous node of the head
    const dummy = { next: head };
    let prev = dummy;
  
    while (head !== null && head.next !== null) {
      // Nodes to be swapped
      const firstNode = head;
      const secondNode = head.next;
  
      // Swapping
      prev.next = secondNode;
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
  
      // Update prev and head for the next pair
      prev = firstNode;
      head = firstNode.next;
    }
  
    return dummy.next;
  }
  