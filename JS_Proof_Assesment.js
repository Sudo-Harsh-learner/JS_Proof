/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const myNFTS = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name="Mario",_type="2D",_size="31KB",_fun="Hell Yeahhh!") {
    const makeNFT = {
        "name" : _name,
        "type" : _type,
        "size" : _size,
        "fun" : _fun
    }
    myNFTS.push(makeNFT);
    console.log("Minted: "+_name+" to my NFT's collection!!\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    const len = getTotalSupply();
    console.log("-".repeat(30));
    for(let i=0; i<len; i++){
        console.log("Name: "+myNFTS[i].name);
        console.log("Type: "+myNFTS[i].type);
        console.log("Size: "+myNFTS[i].size);
        console.log("Fun2Play: "+myNFTS[i].fun);
        console.log("-".repeat(30));
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return myNFTS.length;
}

// call your functions below this line
mintNFT("OW2","FPS","50GB","Yesssss!");
mintNFT("Valorant","FPS","40GB","Nahh");
mintNFT("CS2","FPS","50GB","Yassss!");
listNFTs();
console.log("Total NST's under possesion: "+getTotalSupply());
