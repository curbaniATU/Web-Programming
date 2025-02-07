function formatNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        arr[i] = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        
    }
    
    return arr.join(', ');
}

console.log(formatNames(["alice", "bob", "charlie"]));