

// alert("--- LINKED LIST : C02 ---\n\n🔗 Let's INSERT and DELETE some nodes in the:\n\t✴ Singly Linked list ▶\n\t✴ Doubly Linked List◀▶\n\t✴ Circular Linked List▶⤴\n\n🔼 need your support..😊");



var main = "";

// Singly linked list main home page : on load operations
const singlyLikedList = () => {
    nodeCounter = -1;
    main = document.getElementById("main");
    main.innerHTML = `
    
    <div class="list-container" id="lstcnt">
    <div class="node" id="node" style="color: rgb(0, 0, 0); text-align: center; font-size: 18px; padding-top: 0px; background-color: aliceblue;">
           Head <br> null
    </div>
        
</div>

<div class="operation-cont">
    <div class="insert-operation-cont" id="insert-btn-box">
        <span class="insert-text">INSERT</span>
        <button class="operation-btn" onclick="Singly_insertBeg()" >Begin</button>
        <button class="operation-btn" onclick="Singly_insertAt() ">At Position</button>
        <button class="operation-btn" onclick="Singly_insertEnd() ">End</button>

    </div>

    <div class="del-operation-cont" id="delete-btn-box">
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Singly_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Singly_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Singly_deleteDataAtEnd()">End</button>
    </div>
</div>

<div id="warning" >Activities...</div>

    `;
}

/* INSERTION AT SINGLY LINKED LIST */

// singly INSERTION at BEGINNING : INPUT
const Singly_insertBeg = () => {
    document.getElementById("insert-btn-box").innerHTML = `
        <span class="insert-text">INSERT</span>
        <button class="operation-btn  active-op-btn" id="sIbeBtn">At Begin
        <input type="text" class="operation-btn data-input" placeholder="Enter data" id="InptD">
        <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Singly_insertDataAtBegin()">
        </button>
    `;

    document.getElementById('delete-btn-box').innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Singly_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Singly_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Singly_deleteDataAtEnd()">End</button>
    `;
}

// singly INSERTION at POSITION : INPUT
const Singly_insertAt = () => {
    document.getElementById("insert-btn-box").innerHTML = `
        <span class="insert-text">INSERT</span>
        <button class="operation-btn  active-op-btn" id="sIbeBtn">At Position
        <input type="text" class="operation-btn data-input" placeholder="data, position" id="InptD">
        <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Singly_insertDataAtPosition()">
        </button>
    `;

    document.getElementById('delete-btn-box').innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Singly_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Singly_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Singly_deleteDataAtEnd()">End</button>
    `;
}

// singly INSERTION at END : INPUT
const Singly_insertEnd = () => {
    document.getElementById("insert-btn-box").innerHTML = `
        <span class="insert-text">INSERT</span>
        <button class="operation-btn  active-op-btn" id="sIbeBtn">At End
        <input type="text" class="operation-btn data-input" placeholder="Enter data" id="InptD">
        <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Singly_insertDataAtEnd()">
        </button>
        `;

    document.getElementById('delete-btn-box').innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Singly_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Singly_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Singly_deleteDataAtEnd()">End</button>
    `;
}


var data, node, dataPart, LinkPart;
// singly INSERTION at END : LIST
const Singly_insertDataAtEnd = () => {
    data = document.getElementById("InptD").value;

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }
    else {
        document.getElementById("insert-btn-box").innerHTML = `
            <span class="insert-text">INSERT</span>
            <button class="operation-btn" onclick="Singly_insertBeg()" id="sIbeBtn">Begin</button>
            <button class="operation-btn" onclick="Singly_insertAt() ">At Position</button>
            <button class="operation-btn" onclick="Singly_insertEnd()">End</button>
        `;
        createNode(data);
        document.getElementById("lstcnt").appendChild(node);
        document.getElementById("lstcnt").lastChild.children[1].innerText = "null";
        document.getElementById("lstcnt").lastChild.children[3].innerText = nodeCounter;
        if (nodeCounter != 0) {
            document.getElementById("lstcnt").lastChild.previousElementSibling.children[1].innerText = address;
        }
        if (nodeCounter == 0) {
            document.getElementById("node").innerHTML = `head <br> ${address}`;
        }
        document.getElementById("warning").innerText = "Node Inserted At End!";
        document.getElementById("warning").style.color = "##000080";
        resizeNode(data, 'singly');
    }
}

var nextNode;
// singly INSERTION at BEGINNING : LIST
const Singly_insertDataAtBegin = () => {
    data = document.getElementById("InptD").value;

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }

    else {
        document.getElementById("insert-btn-box").innerHTML = `
            <span class="insert-text">INSERT</span>
            <button class="operation-btn" onclick="Singly_insertBeg()" id="sIbeBtn">Begin</button>
            <button class="operation-btn" onclick="Singly_insertAt() ">At Position</button>
            <button class="operation-btn" onclick="Singly_insertEnd()">End</button>
        `;

        createNode(data);
        document.getElementById("node").innerHTML = `head <br> ${address}`;
        document.getElementById("node").insertAdjacentElement("afterend", node);
        document.getElementById(`nodeNumber${nodeCounter}`).innerText = "0";
        if (nodeCounter == 0) {
            document.getElementById(`link-part${nodeCounter}`).innerText = "null";
        }
        else {
            nextNode = document.getElementById("node").nextElementSibling;
            for (let i = 0; i < nodeCounter; i++) {
                nextNode.children[1].innerText = nextNode.nextElementSibling.children[2].innerText;
                nextNode.nextElementSibling.lastChild.innerText = i + 1;
                nextNode = nextNode.nextElementSibling;
            }
        }

        document.getElementById("warning").innerText = "Node Inserted At Start!";
        document.getElementById("warning").style.color = "##000080";
        resizeNode(data, 'singly');
    }

}

// singly INSERTION at POSITION : LIST
const Singly_insertDataAtPosition = () => {
    data = document.getElementById("InptD").value;
    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }
    else {
        data = validateData(data);


        if (data[0] == "") {
            document.getElementById("warning").innerText = `Please Enter a node value!`;
            document.getElementById("warning").style.color = "##000080";
        }
        else if (data[1] <= nodeCounter + 1) {
            document.getElementById("insert-btn-box").innerHTML = `
                <span class="insert-text">INSERT</span>
                <button class="operation-btn" onclick="Singly_insertBeg()" id="sIbeBtn">Begin</button>
                <button class="operation-btn" onclick="Singly_insertAt() ">At Position</button>
                <button class="operation-btn" onclick="Singly_insertEnd()">End</button>
            `;
            createNode(data[0]);
            document.getElementById("lstcnt").childNodes[data[1] + 1].insertAdjacentElement("afterend", node);
            if (data[1] == 0) {
                document.getElementById("node").innerHTML = `head <br> ${address}`;
                if (nodeCounter == 0) {
                    document.getElementById("lstcnt").children[data[1] + 1].children[1].innerText = "null";
                    document.getElementById("lstcnt").children[data[1] + 1].children[3].innerText = 0;
                }
                else {
                    for (let i = 0; i <= nodeCounter; i++) {
                        if (i < nodeCounter)
                            document.getElementById("lstcnt").children[1 + i].children[1].innerText = document.getElementById("lstcnt").children[i + 2].children[2].innerText;
                        else
                            document.getElementById("lstcnt").children[1 + i].children[1].innerText = "null";
                        document.getElementById("lstcnt").children[1 + i].children[3].innerText = i;
                    }
                }
            }
            else {
                if (data[1] == nodeCounter) {
                    document.getElementById(`link-part${nodeCounter}`).innerText = "null";
                    document.getElementById(`nodeNumber${nodeCounter}`).innerText = data[1];
                    document.getElementById(`node${nodeCounter}`).previousElementSibling.children[1].innerText = document.getElementById(`node${nodeCounter}`).children[2].innerText;
                } else {
                    document.getElementById(`link-part${nodeCounter}`).innerText = document.getElementById(`node${nodeCounter}`).nextElementSibling.children[2].innerText;
                    document.getElementById(`node${nodeCounter}`).previousElementSibling.children[1].innerText = document.getElementById(`addressSpan${nodeCounter}`).innerText;
                    for (let i = data[1] + 1; i <= nodeCounter + 1; i++) {
                        document.getElementById(`lstcnt`).children[i].children[3].innerText = i - 1;
                    }
                }
            }
            document.getElementById("warning").innerText = `Node Inserted At Position ${data[1]}`;
            document.getElementById("warning").style.color = "##000080";
            resizeNode(data, 'singly');
        } else {
            document.getElementById("warning").innerText = `Invalid Position!`;
            document.getElementById("warning").style.color = "#000000";
        }
    }


}

/* DELETION AT SINGLY LINKED LIST */

// singly DELETION at BEGINNING : LIST
const Singly_deleteDataAtBegin = () => {
    if (nodeCounter == -1) {
        document.getElementById("warning").innerText = "List is Empty!";
        document.getElementById("warning").style.color = "#000000";

    }
    else {
        document.getElementById("lstcnt").children[1].remove();
        document.getElementById("warning").innerText = `First node has removed!`;
        document.getElementById("warning").style.color = "##000080";

        if (nodeCounter == 0) {
            document.getElementById("node").innerHTML = `head <br> null`;
        }
        for (let i = 0; i < nodeCounter; i++) {
            document.getElementById("node").innerHTML = `head <br> ${document.getElementById("lstcnt").children[1].children[2].innerText}`;
            document.getElementById("lstcnt").children[1 + i].children[3].innerText = i;
        }

        nodeCounter--;
    }


}

// singly DELETION at END : LIST
const Singly_deleteDataAtEnd = () => {
    if (nodeCounter == -1) {
        document.getElementById("warning").innerText = "List is Empty!";
        document.getElementById("warning").style.color = "#000000";
    }
    else {
        document.getElementById("lstcnt").lastElementChild.remove();
        document.getElementById("warning").innerText = `Last node has removed!`;
        document.getElementById("warning").style.color = "##000080";

        if (nodeCounter != 0)
            document.getElementById(`lstcnt`).lastElementChild.children[1].innerText = "null";
        else
            document.getElementById(`node`).innerHTML = `head <br> null`;
        nodeCounter--;
    }
}

// singly DELETION at POSITION : INPUT
const Singly_deleteAt = () => {
    document.getElementById("delete-btn-box").innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn  active-op-btn">At Position
        <input type="text" class="operation-btn data-input" placeholder="Enter Position" id="InptP">
        <input type="submit" value="Delete" class="operation-btn data-input insert-btn" onclick="Singly_deleteDataAtPosition()">
        </button>
    `;

    document.getElementById("insert-btn-box").innerHTML = `
    <span class="insert-text">INSERT</span>
    <button class="operation-btn" onclick="Singly_insertBeg()" id="sIbeBtn">Begin</button>
    <button class="operation-btn" onclick="Singly_insertAt() ">At Position</button>
    <button class="operation-btn" onclick="Singly_insertEnd() ">End</button>
    `;
}

// singly DELETION at POSITION : LIST
const Singly_deleteDataAtPosition = () => {
    data = parseInt(document.getElementById("InptP").value);

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill the Value!";
        document.getElementById("warning").style.color = "#000000";
    }
    else {

        document.getElementById("delete-btn-box").innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Singly_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Singly_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Singly_deleteDataAtEnd()">End</button>
        `;

        if (document.getElementById("lstcnt").childNodes[2].firstChild === null) {
            document.getElementById("warning").innerText = "List is Empty!";
            document.getElementById("warning").style.color = "#000000";
        } else {
            if (data <= nodeCounter) {
                document.getElementById("lstcnt").removeChild((document.getElementById("lstcnt")).childNodes[parseInt(data) + 2]);
                document.getElementById("warning").innerText = `Node ${data} has removed!`;
                document.getElementById("warning").style.color = "##000080";

                if (data == 0) {
                    if (nodeCounter != 0) {
                        document.getElementById("lstcnt").children[data].innerHTML = `head <br> ${document.getElementById("lstcnt").children[1].children[2].innerText}` ;
                        for (let i = 1; i <= nodeCounter; i++) {
                            document.getElementById("lstcnt").children[i].children[3].innerText = i - 1;
                        }
                    }
                    else {
                        document.getElementById("lstcnt").children[data].innerHTML = `head <br> null`;
                    }
                }
                else if (data == nodeCounter) {
                    document.getElementById("lstcnt").children[data].children[1].innerText = "null";
                }
                else {
                    document.getElementById("lstcnt").children[data].children[1].innerText = document.getElementById("lstcnt").children[data].nextElementSibling.children[2].innerText;
                    for (let i = data; i <= nodeCounter; i++) {
                        document.getElementById("lstcnt").children[i].children[3].innerText = i - 1;
                    }
                }

                nodeCounter--;
            } else {
                document.getElementById("warning").innerText = `Invalid Position!`;
                document.getElementById("warning").style.color = "#000000";
            }
        }
    }
}


/* HOME PAGE OF DOUBLY LINKED LIST */

const doublyLikedList = () => {
    nodeCounter = -1;
    document.getElementById("main").innerHTML = `
    
    <div class="list-container" id="lstcnt">
            <div class="node" id="node" style="color: rgb(0, 0, 0); text-align: center; font-size: 18px; padding-top: 0px; background-color: aliceblue;">
                Head <br> null
            </div>
        </div>

         <div class="operation-cont">
            <div class="insert-operation-cont" id="insert-btn-box">
                <span class="insert-text">INSERT</span>
                <button class="operation-btn" onclick="Doubly_insertBeg()" id="sIbeBtn">Begin</button>
                <button class="operation-btn" onclick="Doubly_insertAt() ">At Position</button>
                <button class="operation-btn" onclick="Doubly_insertEnd() ">End</button>

            </div>

            <div class="del-operation-cont" id="delete-btn-box">
                <span class="del-text">DELETE</span>
                <button class="operation-btn" onclick="Doubly_deleteDataAtBegin()">Begin</button>
                <button class="operation-btn" onclick="Doubly_deleteAt()">Position</button>
                <button class="operation-btn" onclick="Doubly_deleteDataAtEnd()">End</button>
            </div>
        </div>

        <div id="warning">Activities ...</div>

            
    `;
}

// doubly INSERTION at BEGINNING : INPUT
const Doubly_insertBeg = () => {
    document.getElementById("insert-btn-box").innerHTML = `
        <span class="insert-text">INSERT</span>
        <button class="operation-btn  active-op-btn" id="sIbeBtn">At Begin
        <input type="text" class="operation-btn data-input" placeholder="Enter data" id="InptD">
        <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Doubly_insertDataAtBegin()">
        </button>
    `;

    document.getElementById('delete-btn-box').innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Doubly_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Doubly_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Doubly_deleteDataAtEnd()">End</button>
    `;
}

// doubly INSERTION at BEGINNING : LIST
const Doubly_insertDataAtBegin = () => {

    data = document.getElementById("InptD").value;

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }

    else {
        document.getElementById("insert-btn-box").innerHTML = `
            <span class="insert-text">INSERT</span>
            <button class="operation-btn" onclick="Doubly_insertBeg()" id="sIbeBtn">Begin</button>
            <button class="operation-btn" onclick="Doubly_insertAt() ">At Position</button>
            <button class="operation-btn" onclick="Doubly_insertEnd()">End</button>
        `;

        createDoublyNode(data);
        document.getElementById("node").innerHTML = `head <br> ${address}`;
        document.getElementById("node").insertAdjacentElement("afterend", node);
        document.getElementById(`nodeNumber${nodeCounter}`).innerText = "0";
        document.getElementById(`node${nodeCounter}`).children[0].innerText = "null";

        if (nodeCounter == 0) {
            document.getElementById(`link-part${nodeCounter}`).innerText = "null";
            document.getElementById(`link-part1${nodeCounter}`).innerText = "null";
        }
        else {
            nextNode = document.getElementById("node").nextElementSibling;
            for (let i = 0; i < nodeCounter; i++) {
                nextNode.children[2].innerText = nextNode.nextElementSibling.children[3].innerText;
                nextNode.nextElementSibling.children[0].innerText = nextNode.children[3].innerText;
                nextNode.nextElementSibling.lastChild.innerText = i + 1;
                nextNode = nextNode.nextElementSibling;
            }
        }

        document.getElementById("warning").innerText = "Node Inserted At Start!";
        document.getElementById("warning").style.color = "##000080";
        resizeNode(data, 'doubly');
    }
}

// doubly INSERTION at POSITION : INPUT
const Doubly_insertAt = () => {
    document.getElementById("insert-btn-box").innerHTML = `
    <span class="insert-text">INSERT</span>
    <button class="operation-btn  active-op-btn" id="sIbeBtn">At Position
    <input type="text" class="operation-btn data-input" placeholder="data, position" id="InptD">
    <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Doubly_insertDataAtPosition()">
    </button>
`;

    document.getElementById('delete-btn-box').innerHTML = `
    <span class="del-text">DELETE</span>
    <button class="operation-btn" onclick="Doubly_deleteDataAtBegin()">Begin</button>
    <button class="operation-btn" onclick="Doubly_deleteAt()">Position</button>
    <button class="operation-btn" onclick="Doubly_deleteDataAtEnd()">End</button>
`;
}

// doubly INSERTION at POSITION : LIST
const Doubly_insertDataAtPosition = () => {
    data = document.getElementById("InptD").value;

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }
    else {
        data = validateData(data);

        if (data[0] == "") {
            document.getElementById("warning").innerText = `Please Enter a node value!`;
            document.getElementById("warning").style.color = "##000080";
        }
        else if (data[1] <= nodeCounter + 1) {
            document.getElementById("insert-btn-box").innerHTML = `
                <span class="insert-text">INSERT</span>
                <button class="operation-btn" onclick="Doubly_insertBeg()" id="sIbeBtn">Begin</button>
                <button class="operation-btn" onclick="Doubly_insertAt() ">At Position</button>
                <button class="operation-btn" onclick="Doubly_insertEnd()">End</button>
            `;

            createDoublyNode(data[0]);
            document.getElementById("lstcnt").childNodes[data[1] + 1].insertAdjacentElement("afterend", node);
            if (data[1] == 0) {
                document.getElementById("node").innerHTML = `head <br> ${address}`;
                if (nodeCounter == 0) {
                    document.getElementById(`link-part${nodeCounter}`).innerText = "null";
                    document.getElementById(`link-part1${nodeCounter}`).innerText = "null";
                }
                else {
                    for (let i = 0; i <= nodeCounter; i++) {
                        if (i < nodeCounter) {
                            if (i == 0)
                                document.getElementById("lstcnt").children[1].children[0].innerText = "null";
                            else
                                document.getElementById("lstcnt").children[i + 1].children[0].innerText = document.getElementById("lstcnt").children[i + 1].previousElementSibling.children[3].innerText;
                            document.getElementById("lstcnt").children[i + 1].children[2].innerText = document.getElementById("lstcnt").children[i + 2].children[3].innerText;
                        }
                        else
                            document.getElementById("lstcnt").children[i + 1].children[0].innerText = document.getElementById("lstcnt").children[i + 1].previousElementSibling.children[3].innerText;
                        document.getElementById("lstcnt").children[i + 1].children[4].innerText = i;
                    }
                }
            }
            else {

                // At the end of the linked list
                if (data[1] == nodeCounter) {
                    document.getElementById(`link-part1${nodeCounter}`).innerText = document.getElementById(`node${nodeCounter}`).previousElementSibling.children[3].innerText;
                    document.getElementById(`link-part${nodeCounter}`).innerText = "null";
                    document.getElementById(`nodeNumber${nodeCounter}`).innerText = data[1];
                    document.getElementById(`node${nodeCounter}`).previousElementSibling.children[2].innerText = address;
                }

                // Any where between
                else {
                    document.getElementById(`link-part1${nodeCounter}`).innerText = document.getElementById(`node${nodeCounter}`).previousElementSibling.children[3].innerText;
                    document.getElementById(`link-part${nodeCounter}`).innerText = document.getElementById(`node${nodeCounter}`).nextElementSibling.children[3].innerText;
                    document.getElementById(`node${nodeCounter}`).previousElementSibling.children[2].innerText = address;
                    document.getElementById(`node${nodeCounter}`).nextElementSibling.children[0].innerText = address;

                    for (let i = data[1] + 1; i <= nodeCounter + 1; i++) {
                        document.getElementById(`lstcnt`).children[i].children[4].innerText = i - 1;
                    }
                }
            }
            document.getElementById("warning").innerText = `Node Inserted At Position ${data[1]}`;
            document.getElementById("warning").style.color = "##000080";
            resizeNode(data[0], 'doubly');
        } else {
            document.getElementById("warning").innerText = `Invalid Position!`;
            document.getElementById("warning").style.color = "#000000";
        }
    }

}

// doubly INSERTION at END : INPUT
const Doubly_insertEnd = () => {
    document.getElementById("insert-btn-box").innerHTML = `
    <span class="insert-text">INSERT</span>
    <button class="operation-btn  active-op-btn" id="sIbeBtn">At End
    <input type="text" class="operation-btn data-input" placeholder="Enter data" id="InptD">
    <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Doubly_insertDataAtEnd()">
    </button>
    `;

    document.getElementById('delete-btn-box').innerHTML = `
    <span class="del-text">DELETE</span>
    <button class="operation-btn" onclick="Doubly_deleteDataAtBegin()">Begin</button>
    <button class="operation-btn" onclick="Doubly_deleteAt()">Position</button>
    <button class="operation-btn" onclick="Doubly_deleteDataAtEnd()">End</button>
`;
}

// doubly INSERTION at END : LIST
const Doubly_insertDataAtEnd = () => {
    data = document.getElementById("InptD").value;

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }
    else {
        document.getElementById("insert-btn-box").innerHTML = `
            <span class="insert-text">INSERT</span>
            <button class="operation-btn" onclick="Doubly_insertBeg()" id="sIbeBtn">Begin</button>
            <button class="operation-btn" onclick="Doubly_insertAt() ">At Position</button>
            <button class="operation-btn" onclick="Doubly_insertEnd()">End</button>
        `;
        createDoublyNode(data);
        document.getElementById("lstcnt").appendChild(node);
        document.getElementById(`node${nodeCounter}`).children[2].innerText = "null";
        document.getElementById(`node${nodeCounter}`).children[4].innerText = nodeCounter;
        if (nodeCounter != 0) {
            document.getElementById(`node${nodeCounter}`).children[0].innerText = document.getElementById(`node${nodeCounter}`).previousElementSibling.children[3].innerText;
            document.getElementById(`node${nodeCounter}`).previousElementSibling.children[2].innerText = document.getElementById(`node${nodeCounter}`).children[3].innerText;
        }
        if (nodeCounter == 0) {
            document.getElementById(`node${nodeCounter}`).children[0].innerText = "null";
            document.getElementById("node").innerHTML = `head <br> ${address}`;
        }
        document.getElementById("warning").innerText = "Node Inserted At End!";
        document.getElementById("warning").style.color = "##000080";
        resizeNode(data, 'doubly');
    }
}

/* DELETION at DOUBLY LINKED LIST */

// doubly DELETION at BEGINNING : LIST
const Doubly_deleteDataAtBegin = () => {
    if (nodeCounter == -1) {
        document.getElementById("warning").innerText = "List is Empty!";
        document.getElementById("warning").style.color = "#000000";
    }
    else {
        document.getElementById("lstcnt").children[1].remove();
        document.getElementById("warning").innerText = `First node has removed!`;
        document.getElementById("warning").style.color = "##000080";

        if (nodeCounter == 0) {
            document.getElementById("node").innerHTML = `head <br> null`;
        }
        for (let i = 0; i < nodeCounter; i++) {
            document.getElementById("node").innerHTML = `head <br> ${document.getElementById("lstcnt").children[1].children[3].innerText}`;
            document.getElementById("lstcnt").children[1].children[0].innerText = "null";
            document.getElementById("lstcnt").children[1 + i].children[4].innerText = i;
        }

        nodeCounter--;
    }


}

// doubly DELETION at END : LIST
const Doubly_deleteDataAtEnd = () => {
    if (nodeCounter == -1) {
        document.getElementById("warning").innerText = "List is Empty!";
        document.getElementById("warning").style.color = "#000000";
    }
    else {
        document.getElementById("lstcnt").lastElementChild.remove();
        document.getElementById("warning").innerText = `Last node has removed!`;
        document.getElementById("warning").style.color = "##000080";

        if (nodeCounter != 0)
            document.getElementById(`lstcnt`).lastElementChild.children[2].innerText = "null";
        else
            document.getElementById(`node`).innerHTML = `head <br> null`;
        nodeCounter--;
    }
}

// doubly DELETION at POSITION : INPUT
const Doubly_deleteAt = () => {
    document.getElementById("delete-btn-box").innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn  active-op-btn">At Position
        <input type="text" class="operation-btn data-input" placeholder="Enter Position" id="InptP">
        <input type="submit" value="Delete" class="operation-btn data-input insert-btn" onclick="Doubly_deleteDataAtPosition()">
        </button>
    `;

    document.getElementById("insert-btn-box").innerHTML = `
    <span class="insert-text">INSERT</span>
    <button class="operation-btn" onclick="Doubly_insertBeg()" id="sIbeBtn">Begin</button>
    <button class="operation-btn" onclick="Doubly_insertAt() ">At Position</button>
    <button class="operation-btn" onclick="Doubly_insertEnd() ">End</button>
    `;
}

// doubly DELETION at POSITION : LIST
const Doubly_deleteDataAtPosition = () => {
    data = parseInt(document.getElementById("InptP").value);

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill the Value!";
        document.getElementById("warning").style.color = "#000000";
    }
    else {

        document.getElementById("delete-btn-box").innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Doubly_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Doubly_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Doubly_deleteDataAtEnd()">End</button>
        `;

        if (document.getElementById("lstcnt").childNodes[2].firstChild === null) {
            document.getElementById("warning").innerText = "List is Empty!";
            document.getElementById("warning").style.color = "#000000";
        } else {
            if (data <= nodeCounter) {
                document.getElementById("lstcnt").removeChild((document.getElementById("lstcnt")).childNodes[parseInt(data) + 2]);
                document.getElementById("warning").innerText = `Node ${data} has removed!`;
                document.getElementById("warning").style.color = "##000080";

                if (data == 0) {
                    if (nodeCounter != 0) {
                        document.getElementById("lstcnt").children[data].innerHTML = `head <br> ${document.getElementById("lstcnt").children[1].children[3].innerText}`;
                        document.getElementById("lstcnt").children[1].children[0].innerText = "null";

                        for (let i = 1; i <= nodeCounter; i++) {
                            document.getElementById("lstcnt").children[i].children[4].innerText = i - 1;
                        }
                    }
                    else {
                        document.getElementById("lstcnt").children[data].innerHTML = `head <br> null`;
                    }
                }
                else if (data == nodeCounter) {
                    document.getElementById(`lstcnt`).lastElementChild.children[2].innerText = "null";
                }
                else {
                    document.getElementById("lstcnt").children[data].children[2].innerText = document.getElementById("lstcnt").children[data].nextElementSibling.children[3].innerText;
                    if (data == 1) {
                        document.getElementById("lstcnt").children[data].children[0].innerText = "null";
                        document.getElementById("lstcnt").children[data].previousElementSibling.innerHTM = `head <br> ${document.getElementById("lstcnt").children[data].children[3].innerText}`;
                    }
                    else {
                        document.getElementById("lstcnt").children[data].children[0].innerText = document.getElementById("lstcnt").children[data].previousElementSibling.children[3].innerText;
                        document.getElementById("lstcnt").children[data].previousElementSibling.children[2].innerText = document.getElementById("lstcnt").children[data].children[3].innerText;
                    }
                    document.getElementById("lstcnt").children[data].nextElementSibling.children[0].innerText = document.getElementById("lstcnt").children[data].children[3].innerText;

                    for (let i = data; i <= nodeCounter; i++) {
                        document.getElementById("lstcnt").children[i].children[4].innerText = i - 1;
                    }
                }

                nodeCounter--;
            } else {
                document.getElementById("warning").innerText = `Invalid Position!`;
                document.getElementById("warning").style.color = "#000000";
            }
        }
    }
}

/* HOME PAGE of CIRCULAR LINKED LIST */
const circularLikedList = () => {
    nodeCounter = -1;
    document.getElementById("main").innerHTML = `

    <div class="list-container" id="lstcnt">
            <div class="node" id="node" style="color: rgb(0, 0, 0); text-align: center; font-size: 18px; padding-top: 0px; background-color: aliceblue;">
                   Head <br> null
            </div>
                
        </div>
        
        
        
        <div class="operation-cont">
            <div class="insert-operation-cont" id="insert-btn-box">
                <span class="insert-text">INSERT</span>
                <button class="operation-btn" onclick="Circular_insertBeg()" id="sIbeBtn">Begin</button>
                <button class="operation-btn" onclick="Circular_insertAt() ">At Position</button>
                <button class="operation-btn" onclick="Circular_insertEnd() ">End</button>
        
            </div>
        
            <div class="del-operation-cont" id="delete-btn-box">
                <span class="del-text">DELETE</span>
                <button class="operation-btn" onclick="Circular_deleteDataAtBegin()">Begin</button>
                <button class="operation-btn" onclick="Circular_deleteAt()">Position</button>
                <button class="operation-btn" onclick="Circular_deleteDataAtEnd()">End</button>
            </div>
        </div>
        
        <div id="warning" >Activities...</div>
        
        
    `;
}

// circular INSERTION at BEGINNING : INPUT
const Circular_insertBeg = () => {
    document.getElementById("insert-btn-box").innerHTML = `
        <span class="insert-text">INSERT</span>
        <button class="operation-btn  active-op-btn" id="sIbeBtn">At Begin
        <input type="text" class="operation-btn data-input" placeholder="Enter data" id="InptD">
        <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Circular_insertDataAtBegin()">
        </button>
    `;

    document.getElementById('delete-btn-box').innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Circular_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Circular_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Circular_deleteDataAtEnd()">End</button>
    `;
}

// circular INSERTION at BEGINNING : LIST
const Circular_insertDataAtBegin = () => {
    data = document.getElementById("InptD").value;

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }

    else {
        document.getElementById("insert-btn-box").innerHTML = `
            <span class="insert-text">INSERT</span>
            <button class="operation-btn" onclick="Circular_insertBeg()" id="sIbeBtn">Begin</button>
            <button class="operation-btn" onclick="Circular_insertAt() ">At Position</button>
            <button class="operation-btn" onclick="Circular_insertEnd()">End</button>
        `;

        createNode(data);
        document.getElementById("node").innerHTML = `head <br> ${address}`;
        document.getElementById("node").insertAdjacentElement("afterend", node);
        document.getElementById(`nodeNumber${nodeCounter}`).innerText = "0";
        if (nodeCounter == 0) {
            document.getElementById(`link-part${nodeCounter}`).innerText = address;
        }
        else {
            nextNode = document.getElementById("node").nextElementSibling;
            for (let i = 0; i < nodeCounter; i++) {
                nextNode.children[1].innerText = nextNode.nextElementSibling.children[2].innerText;
                nextNode.nextElementSibling.lastChild.innerText = i + 1;
                nextNode = nextNode.nextElementSibling;
            }
        }

        document.getElementById("lstcnt").lastElementChild.children[1].innerText = document.getElementById(`addressSpan${nodeCounter}`).innerText;
        document.getElementById("warning").innerText = "Node Inserted At Start!";
        document.getElementById("warning").style.color = "##000080";
        resizeNode(data, 'singly');
    }
}

// circular INSERTION at POSITION : INPUT
const Circular_insertAt = () => {
    document.getElementById("insert-btn-box").innerHTML = `
        <span class="insert-text">INSERT</span>
        <button class="operation-btn  active-op-btn" id="sIbeBtn">At Position
        <input type="text" class="operation-btn data-input" placeholder="Enter data" id="InptD">
        <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Circular_insertDataAtPosition()">
        </button>
    `;

    document.getElementById('delete-btn-box').innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Circular_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Circular_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Circular_deleteDataAtEnd()">End</button>
    `;
}

// circular INSERTION at POSITION : LIST
const Circular_insertDataAtPosition = () => {
    data = document.getElementById("InptD").value;
    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }
    else {
        data = validateData(data);


        if (data[0] == "") {
            document.getElementById("warning").innerText = `Please Enter a node value!`;
            document.getElementById("warning").style.color = "##000080";
        }
        else if (data[1] <= nodeCounter + 1) {
            document.getElementById("insert-btn-box").innerHTML = `
                <span class="insert-text">INSERT</span>
                <button class="operation-btn" onclick="Circular_insertBeg()" id="sIbeBtn">Begin</button>
                <button class="operation-btn" onclick="Circular_insertAt() ">At Position</button>
                <button class="operation-btn" onclick="Circular_insertEnd()">End</button>
            `;
            createNode(data[0]);
            if (data[1] == 0) {
                document.getElementById("lstcnt").children[0].insertAdjacentElement("afterend", node);
                document.getElementById("node").innerHTML = `head <br> ${address}`;
                if (nodeCounter == 0) {
                    document.getElementById("lstcnt").children[data[1] + 1].children[1].innerText = address;
                    document.getElementById("lstcnt").children[data[1] + 1].children[3].innerText = 0;
                }
                else {
                    for (let i = 0; i <= nodeCounter; i++) {
                        if (i < nodeCounter)
                            document.getElementById("lstcnt").children[1 + i].children[1].innerText = document.getElementById("lstcnt").children[i + 2].children[2].innerText;
                        else{
                            document.getElementById("lstcnt").children[1 + i].children[1].innerText = address;
                        }
                        document.getElementById("lstcnt").children[1 + i].children[3].innerText = i;
                    }
                }
            }
            else {
                if (data[1] == nodeCounter) {
                    document.getElementById("lstcnt").appendChild(node);
                    document.getElementById(`link-part${nodeCounter}`).innerText = document.getElementById(`lstcnt`).children[1].children[2].innerText;
                    document.getElementById(`nodeNumber${nodeCounter}`).innerText = data[1];
                    document.getElementById(`node${nodeCounter}`).previousElementSibling.children[1].innerText = document.getElementById(`node${nodeCounter}`).children[2].innerText;
                } else {
                    document.getElementById("lstcnt").children[data[1]].insertAdjacentElement("afterend", node);
                    document.getElementById(`link-part${nodeCounter}`).innerText = document.getElementById(`node${nodeCounter}`).nextElementSibling.children[2].innerText;
                    document.getElementById(`node${nodeCounter}`).previousElementSibling.children[1].innerText = document.getElementById(`addressSpan${nodeCounter}`).innerText;
                    for (let i = data[1] + 1; i <= nodeCounter + 1; i++) {
                        document.getElementById(`lstcnt`).children[i].children[3].innerText = i - 1;
                    }
                }
            }
            document.getElementById("warning").innerText = `Node Inserted At Position ${data[1]}`;
            document.getElementById("warning").style.color = "##000080";
            resizeNode(data, 'singly');
        } else {
            document.getElementById("warning").innerText = `Invalid Position!`;
            document.getElementById("warning").style.color = "#000000";
        }
    }


}

// circular INSERTION at END : INPUT
const Circular_insertEnd = () => {
    document.getElementById("insert-btn-box").innerHTML = `
        <span class="insert-text">INSERT</span>
        <button class="operation-btn  active-op-btn" id="sIbeBtn">At End
        <input type="text" class="operation-btn data-input" placeholder="Enter data" id="InptD">
        <input type="submit" value="Insert" class="operation-btn data-input insert-btn" onclick="Circular_insertDataAtEnd()">
        </button>
        `;

    document.getElementById('delete-btn-box').innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Circular_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Circular_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Circular_deleteDataAtEnd()">End</button>
    `;
}

// circular INSERTION at END : LIST
const Circular_insertDataAtEnd = () => {
    data = document.getElementById("InptD").value;

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill a value ";
        document.getElementById("warning").style.color = "##000080";
        document.getElementById("InptD").style.backgroundColor = "#ee82ee";
    }
    else {
        document.getElementById("insert-btn-box").innerHTML = `
            <span class="insert-text">INSERT</span>
            <button class="operation-btn" onclick="Circular_insertBeg()" id="sIbeBtn">Begin</button>
            <button class="operation-btn" onclick="Circular_insertAt() ">At Position</button>
            <button class="operation-btn" onclick="Circular_insertEnd()">End</button>
        `;
        createNode(data);
        document.getElementById("lstcnt").appendChild(node);
        document.getElementById("lstcnt").lastChild.children[1].innerText = document.getElementById("lstcnt").children[1].children[2].innerText;
        document.getElementById("lstcnt").lastChild.children[3].innerText = nodeCounter;
        if (nodeCounter != 0) {
            document.getElementById("lstcnt").lastChild.previousElementSibling.children[1].innerText = address;
        }
        if (nodeCounter == 0) {
            document.getElementById("node").innerHTML = `head <br> ${address}`;
        }
        document.getElementById("warning").innerText = "Node Inserted At End!";
        document.getElementById("warning").style.color = "##000080";
        resizeNode(data, 'singly');
    }
}

// circular DELETION at BEGINNING : LIST
const Circular_deleteDataAtBegin = () => {
    if (nodeCounter == -1) {
        document.getElementById("warning").innerText = "List is Empty!";
        document.getElementById("warning").style.color = "#000000";

    }
    else {
        document.getElementById("lstcnt").children[1].remove();
        document.getElementById("warning").innerText = `First node has removed!`;
        document.getElementById("warning").style.color = "##000080";

        if (nodeCounter == 0) {
            document.getElementById("node").innerHTML = `head <br> null`;
        }else if(nodeCounter == 1) {
            document.getElementById("node").nextElementSibling.children[1].innerText = document.getElementById("node").nextElementSibling.children[2].innerText;
        } else {
            document.getElementById("lstcnt").lastElementChild.children[1].innerText = document.getElementById("node").nextElementSibling.children[2].innerText;
        }
        for (let i = 0; i < nodeCounter; i++) {
            document.getElementById("node").innerHTML = `head <br> ${document.getElementById("lstcnt").children[1].children[2].innerText}`;
            document.getElementById("lstcnt").children[1 + i].children[3].innerText = i;
        }
        nodeCounter--;
    }


}

// circular DELETION at END : LIST
const Circular_deleteDataAtEnd = () => {
    if (nodeCounter == -1) {
        document.getElementById("warning").innerText = "List is Empty!";
        document.getElementById("warning").style.color = "#000000";
    }
    else {
        document.getElementById("lstcnt").lastElementChild.remove();
        document.getElementById("warning").innerText = `Last node has removed!`;
        document.getElementById("warning").style.color = "##000080";

        if (nodeCounter != 0)
            document.getElementById(`lstcnt`).lastElementChild.children[1].innerText = document.getElementById(`node`).nextElementSibling.children[2].innerText;
        else{
            document.getElementById(`node`).innerHTML = `head <br> null`;
        }
        nodeCounter--;
    }
}

// circular DELETION at POSITION : INPUT
const  Circular_deleteAt = () => {
    document.getElementById("delete-btn-box").innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn  active-op-btn">At Position
        <input type="text" class="operation-btn data-input" placeholder="Enter Position" id="InptP">
        <input type="submit" value="Delete" class="operation-btn data-input insert-btn" onclick="Circular_deleteDataAtPosition()">
        </button>
    `;

    document.getElementById("insert-btn-box").innerHTML = `
    <span class="insert-text">INSERT</span>
    <button class="operation-btn" onclick="Circular_insertBeg()" id="sIbeBtn">Begin</button>
    <button class="operation-btn" onclick="Circular_insertAt() ">At Position</button>
    <button class="operation-btn" onclick="Circular_insertEnd() ">End</button>
    `;
}

// circular DELETION at POSITION : LIST
const Circular_deleteDataAtPosition = () => {
    data = parseInt(document.getElementById("InptP").value);

    if (data.length == 0) {
        document.getElementById("warning").innerText = "Please Fill the Value!";
        document.getElementById("warning").style.color = "#000000";
    }
    else {

        document.getElementById("delete-btn-box").innerHTML = `
        <span class="del-text">DELETE</span>
        <button class="operation-btn" onclick="Circular_deleteDataAtBegin()">Begin</button>
        <button class="operation-btn" onclick="Circular_deleteAt()">Position</button>
        <button class="operation-btn" onclick="Circular_deleteDataAtEnd()">End</button>
        `;

        if (document.getElementById("lstcnt").childNodes[2].firstChild === null) {
            document.getElementById("warning").innerText = "List is Empty!";
            document.getElementById("warning").style.color = "#000000";
        } else {
            if (data <= nodeCounter) {
                document.getElementById("lstcnt").children[parseInt(data)+1].remove();
                document.getElementById("warning").innerText = `Node ${data} has removed!`;
                document.getElementById("warning").style.color = "##000080";

                if (data == 0) {
                    if (nodeCounter != 0) {
                        document.getElementById("lstcnt").children[data].innerHTML = `head <br> ${document.getElementById("lstcnt").children[1].children[2].innerText}`;
                        document.getElementById("lstcnt").lastElementChild.children[1].innerText = document.getElementById("lstcnt").children[1].children[2].innerText; 
                            
                        for (let i = 1; i <= nodeCounter; i++) {
                            document.getElementById("lstcnt").children[i].children[3].innerText = i - 1;
                        }
                    }
                    else {
                        document.getElementById("lstcnt").children[data].innerHTML = `head <br> null`;
                    }
                }
                else if (data == nodeCounter) {
                    document.getElementById("lstcnt").children[data].children[1].innerText = document.getElementById("lstcnt").children[1].children[2].innerText;
                }
                else {
                    document.getElementById("lstcnt").children[data].children[1].innerText = document.getElementById("lstcnt").children[data].nextElementSibling.children[2].innerText;
                    for (let i = data; i <= nodeCounter; i++) {
                        document.getElementById("lstcnt").children[i].children[3].innerText = i - 1;
                    }
                }

                nodeCounter--;
            } else {
                document.getElementById("warning").innerText = `Invalid Position!`;
                document.getElementById("warning").style.color = "#000000";
            }
        }
    }
}


var nodeCounter = -1, address = 0, addressContainer = [], addressSpan, nodeNumber;
const createNode = (data) => {
    nodeCounter++;
    address = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    while (addressContainer.includes(address)) {
        address = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    }
    addressContainer.push(address);

    node = document.createElement("div");
    node.setAttribute("class", "node");
    node.setAttribute("id", `node${nodeCounter}`);
    dataPart = document.createElement("div");
    dataPart.setAttribute("class", "data-part");
    dataPart.setAttribute("id", `data-part${nodeCounter}`);
    dataPart.setAttribute("style", ` border-radius: 5px 0px 0px 5px;`);
    dataPart.appendChild(document.createTextNode(data));
    LinkPart = document.createElement("div");
    LinkPart.setAttribute("class", "link-part");
    LinkPart.setAttribute("id", `link-part${nodeCounter}`);
    LinkPart.appendChild(document.createTextNode(address));

    addressSpan = document.createElement("span");
    addressSpan.setAttribute("id", `addressSpan${nodeCounter}`);
    addressSpan.setAttribute("style", "position: relative; top: 5px; left: 35px; color: #add8e6;");
    addressSpan.appendChild(document.createTextNode(address));

    nodeNumber = document.createElement("span");
    nodeNumber.setAttribute("id", `nodeNumber${nodeCounter}`);
    nodeNumber.setAttribute("style", "position: relative; top: -72px; left: 10px; color: #add8e6;");
    nodeNumber.appendChild(document.createTextNode(nodeCounter));

    node.appendChild(dataPart);
    node.appendChild(LinkPart);
    node.appendChild(addressSpan);
    node.appendChild(nodeNumber);

}

var returnData = '', flag = true, returnList = [], index = 0, count = 0;
const validateData = (data) => {
    returnData = '', flag = true, returnList = [], index = 0, count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] == ',')
            count++;
    }
    if (count == 1) {
        returnData = data.slice(data.search(',') + 1,);
        for (let i = 0; i < returnData.length; i++) {
            if (returnData[i].charCodeAt() < 48 || returnData[i].charCodeAt() > 57) {
                if (returnData[i].charCodeAt() == 32)
                    continue;
                flag = false;
                break;
            }
            else {
                index = index * 10 + parseInt(returnData[i]);
            }
        }

        if (flag) {
            returnList.push(data.slice(0, data.search(',')));
            returnList.push(index);
            return returnList;
        }

        else {
            return false;
        }
    }
    else {
        return false;
    }
}


const resizeNode = (data, type) => {

    if (type == 'doubly') {
        if (data.length >= 0 && data.length < 6) {
            document.getElementById(`node${nodeCounter}`).style.width = "194px";
            document.getElementById(`data-part${nodeCounter}`).style.width = "90px";

        } else if (data.length >= 6) {

            document.getElementById(`node${nodeCounter}`).style.width = "199px";
            document.getElementById(`data-part${nodeCounter}`).style.width = "95px";
            document.getElementById(`data-part${nodeCounter}`).style.overflow = "auto";
            document.getElementById(`data-part${nodeCounter}`).style.overflowY = "hidden";
            document.getElementById(`link-part${nodeCounter}`).style.position = "relative";
            document.getElementById(`link-part${nodeCounter}`).style.top = "-13px";
            document.getElementById(`link-part1${nodeCounter}`).style.position = "relative";
            document.getElementById(`link-part1${nodeCounter}`).style.top = "-13px";
            document.getElementById(`nodeNumber${nodeCounter}`).style.top = "-84px";
            document.getElementById(`addressSpan${nodeCounter}`).style.top = "-8px";
        }
    }

    else {
        if (data.length > 0 && data.length < 6) {
            document.getElementById(`node${nodeCounter}`).style.width = "145px";
            document.getElementById(`data-part${nodeCounter}`).style.width = "90px";

        } else if (data.length >= 6) {

            document.getElementById(`node${nodeCounter}`).style.width = "150px";
            document.getElementById(`data-part${nodeCounter}`).style.width = "95px";
            document.getElementById(`data-part${nodeCounter}`).style.overflow = "auto";
            document.getElementById(`data-part${nodeCounter}`).style.overflowY = "hidden";
            document.getElementById(`link-part${nodeCounter}`).style.position = "relative";
            document.getElementById(`link-part${nodeCounter}`).style.top = "-13px";
            document.getElementById(`nodeNumber${nodeCounter}`).style.top = "-84px";
            document.getElementById(`addressSpan${nodeCounter}`).style.top = "-8px";
        }
    }
}


const createDoublyNode = (data) => {
    nodeCounter++;
    address = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    while (addressContainer.includes(address)) {
        address = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    }
    addressContainer.push(address);

    node = document.createElement("div");
    node.setAttribute("class", "node");
    node.setAttribute("id", `node${nodeCounter}`);
    LinkPart1 = document.createElement("div");
    LinkPart1.setAttribute("class", "link-part1");
    LinkPart1.setAttribute("id", `link-part1${nodeCounter}`);
    LinkPart1.appendChild(document.createTextNode(address));
    dataPart = document.createElement("div");
    dataPart.setAttribute("class", "data-part");
    dataPart.setAttribute("id", `data-part${nodeCounter}`);
    dataPart.appendChild(document.createTextNode(data));
    LinkPart2 = document.createElement("div");
    LinkPart2.setAttribute("class", "link-part");
    LinkPart2.setAttribute("id", `link-part${nodeCounter}`);
    LinkPart2.appendChild(document.createTextNode(address));

    addressSpan = document.createElement("span");
    addressSpan.setAttribute("id", `addressSpan${nodeCounter}`);
    addressSpan.setAttribute("style", "position: relative; top: 5px; left: 80px; color: #add8e6;");
    addressSpan.appendChild(document.createTextNode(address));

    nodeNumber = document.createElement("span");
    nodeNumber.setAttribute("id", `nodeNumber${nodeCounter}`);
    nodeNumber.setAttribute("style", "position: relative; top: -72px; left: 60px; color: #add8e6;");
    nodeNumber.appendChild(document.createTextNode(nodeCounter));

    node.appendChild(LinkPart1);
    node.appendChild(dataPart);
    node.appendChild(LinkPart2);
    node.appendChild(addressSpan);
    node.appendChild(nodeNumber);
}



const closeAd = () => {
    document.getElementById("ad-section").style.display = "none";
    document.getElementById("ad-text").style.display = "none";
}


const gotoSite = (site) => {
    if (window.confirm('Ok to visit my code, Cancel to Stay here')) {
        window.open(site, '_blank');
    };
}