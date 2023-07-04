class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(array) {
        for (let index = 0; index < array.length; index++) {
            this.add(array[index]);
        }
    }

    add (data) {
        if (this.head == null) {
            this.head = new ListNode(data);
        }
        else {
            let temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = new ListNode(data);
        } 
    }

    remove (data) {
        if (this.head.data === data) {
            this.head = this.head.next;
            return true;
        }
        let temp = this.head;
        let toDelete = null;
        while(temp.next) {
            if (temp.next.data === data) {
                toDelete = temp.next;
                break;
            }
            temp = temp.next;
        }
        if (toDelete) {
            temp.next = toDelete.next;
            return true;
        }
        return false;
    }

    contains(data) {
        let temp = this.head;
        while (temp) {
            if (temp.data === data) return true;
            temp = temp.next;
        }
        return false;
    }

    [Symbol.iterator] = () => {
        return {
            current: this.head,
            next() {
                if (this.current == null) {
                    return {done: true}
                }
                else {
                    let temp = this.current.data;
                    this.current = this.current.next;
                    return {done: false, value: temp}
                }
            }
        }
    }

    clear() {
        this.head = null;
    }

    log() {
        let result = "";
        let temp = this.head;
        while (temp) {
            result += temp.data;
            if (temp.next) 
                result += ", ";
            temp = temp.next;
        }
        console.log(result);
    }
}

function createLinkedList(arr) {
    return new LinkedList(arr);
}

// const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
// ll.log();// "100, 1, 2, 3, 100, 4, 5, 100"
// while(ll.remove(100));
// ll.log();// "1, 2, 3, 4, 5"
// ll.add(10);
// ll.log();// "1, 2, 3, 4, 5, 10"
// console.log(ll.contains(10));// "true"
// let sum = 0;
// for(const n of ll) {
//     sum += n;
// }
// console.log(sum);// "25"
// ll.clear();
// ll.log(); // ""