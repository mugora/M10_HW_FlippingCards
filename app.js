new Vue({
    el: "#flashcards-app",
    data: {
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
        ],
        form: {
            question:"",
            answer:""
        }
    },

    methods:{
        flipCard:function (index){
            this.cards[index].flipped=true;
        },

        //adds items to the form
        addItem: function (){
            this.cards.push({question: this.question.question, answer: this.form.answer})
        },


    }
})