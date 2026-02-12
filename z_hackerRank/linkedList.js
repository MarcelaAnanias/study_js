// Percorra todos os nós de uma lista, imprimindo os valores um por um.

const node2 = { data: 13, next: null }; //nó 2 - "null", ou seja, fim da lista.
const head = { data: 16, next: node2 }; //nó 1 - "next:node2", ou seja, próxima.

function printLinkedList(head) {
    let current = head;

    while (current !== null) { //se não for "null", prossiga.
        console.log(current.data);
        current = current.next; //faz o laço andar para o próximo nó até chegar ao null.
    }

    return current;
}

console.log(printLinkedList(head))