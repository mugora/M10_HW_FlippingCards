new Vue({
  el: "#flashcards-app",
  data: {
    question: "",
    answer: "",
    category: "",
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },
  methods: {
    flip: function(idx){
      
      if(this.cards[idx].flipped === false){
        this.cards[idx].flipped = true;
        console.log("flipped is true");
      }else if(this.cards[idx].flipped  === true){
        this.cards[idx].flipped = false;
        console.log("flipped is false");
      }else{
        this.cards[idx].flipped = false
      }
    },
    submit: function(){
      this.cards.push({question: this.question, answer: this.answer, category: this.category, flipped: false});
      console.log("added item")
    }
  }
})
