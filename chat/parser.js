function parse(string){
    //return a tree; start node is always *
    var rules={
        "*":["S"],
        "S":""
    }


}

/*Aim: to be able to parse the following sentence:
"We can observe a strong tendency for the shortest complement to appear first."

into:

[
    {declaration: "We can observe a strong tendency for the shortest complement to appear first."},
    { : "We can observe",parent:0},
    { : "A strong tendency for", parent: 0},
    { : "the shortest complement", parent: 0},
]

but like, with real grammatical things.

you cant code care steven
*/


function understander(parsetree){

}
/*
Aim: to be able to parse the following sentence:
"We can observe a strong tendency for the shortest complement to appear first."

into:
we -observe> {exists> {tendency of {appear first}} of {shortest complement}}

then into
we observe the shortest complement has a tendency to appear first.
*/