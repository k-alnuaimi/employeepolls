import { describe, expect } from "vitest"
import { _saveQuestion } from "../_DATA"



describe('Save Question test', () => {


    it('Check correct save ', async () => {

        const question = {
            optionOneText: "Go Swimming",
            optionTwoText:" Play Football",
            author:"sarahedo"
        }


        const result = await _saveQuestion(question)
        expect(result).toMatchObject({
            author:question.author,
            id:expect.any(String),
            optionOne:{
                text:question.optionOneText,
                votes: []
            },optionTwo:{
                text:question.optionTwoText,
                votes: []
            },
            timestamp:expect.any(Number)
        })

    })
     it('Check incorrect save ', async () => {

        const question = {
   
            optionTwoText:" Play Football",
            author:"sarahedo"
        }

        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")

    }) 

})