const isEmail=require('validator').isEmail;
const mongoose = require('mongoose');

const SignUpSchema = mongoose.Schema({
    signId: { type: Number, default: 999 },
    firstName: { 
        type: String, 
        required: true,
        validate(value){
            if(value==null || value==" "){
                throw new Error("Empty First name is not allowed.");
            }
        }
    },
    middleName: { type: String },
    lastName: { 
        type: String, 
        required: true,
        validate(value){
            if(value==null || value==" "){
                throw new Error("Empty Last name is not allowed.");
            }
        } 
    },
    age: { 
        type: Number, 
        required: true,
        validate(value){
            if(value=="" || value==" "){
                throw new Error("Empty age is not allowed.");
            }
        }
    },
    gender: { 
        type: String, 
        required: true,
        validate(value){
            let arr=["male","female","Male","Female","F","M","m","f"];
            if(!arr.includes(value)){
                throw new Error("invalid gender.");
            }
        }
    },
    email: { 
        type: String, 
        required: true,
        validate: [ isEmail, 'invalid email' ] 
    },
    country: { 
        type: String, 
        required: true,
        validate(value){
            if(value==null || value==" "){
                throw new Error("Empty Country is not allowed.");
            }
        } 
    },
    qualification:{
        type:Object,
        required:true,
        validate(value){
            if(value==null || value==" "){
                throw new Error("Empty Qualification is not allowed.");
            }
        }
    },
    wantScholar: { 
        type: Boolean, 
        required: true,
        validate(value){
            if(value==null || value==" "){
                throw new Error("Empty Scholorship info is not allowed.");
            }
        } 
    },
    description:{ type: String},
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('signup', SignUpSchema);