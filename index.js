function inOrder(node) {
    if(node.left){
        inOrder(node.left)
    }
    console.log(node.data)
    if(node.right) {
        inOrder(node.right)
    }
}

function findOrAdd(rootNode, newNode) {
    let current = rootNode
    if(newNode.data < rootNode.data) {
        current = rootNode.left
        if(current) {
            findOrAdd(current, newNode)
            return true
        } else {
            rootNode.left = newNode
        }
    } else if(newNode.data > rootNode.data) {
        current = rootNode.right
        if(current) {
            findOrAdd(current, newNode)
            return true
        } else {
            rootNode.right = newNode
        }
    }
}

function max(node) {
    if(node.right) {
        return max(node.right)
    } else {
        return node
    }
}

function min(node) {
    if(node.left){
        return min (node.left)
    } else {
        return node
    }
}
