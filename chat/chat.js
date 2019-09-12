process.stdin.resume();
/*for (let i in process.stdin){
  try{
    console.log(i+"=="+process.stdin[i]);
  }catch (e){
    console.log(i);
  }
  
}*/
//process.stdin.on('*',(d)=>console.log(d));

function tryIntegrate(assertion){
  let stance=database.stanceOn(assertion)
  if(stance=="agree"){
    interject(tonality,"agree");
  }else if (stance=="disagree") {//question is fact
    interject(tonality,"disagree");
  }else if (stance=="unknown"){
    database.adoptstance(assertion);
    interject(tonality, "agree");
  }
}

function synthesise(question){
  let fact=database.query(question);
  if (fact){
    relay(fact);
  }else{
    interject(tonality,"unsure");
  }
}

function respondTo(question){
  if (question.isbinary()){
    tryIntegrate(question.toAssertion());
  }else {//try and figure out a nice response...?
    synthesise(question);    
  }
}

function dealwith(msg){
  tree=nlp.parse(msg);
  tonality=nlp.tonality(msg);
  if (tree.type=="interjection"){
    interject(tonality);
  }else if (tree.type=="assertion"){
    tryIntegrate(assertion);
  }else if (tree.type=="question"){
    respondTo(assertion);
  }
}



process.stdin.on('data', (d) => {
  dealwith(d.toString());
});