import { describe, expect } from "vitest"
import { _saveQuestionAnswer2 } from "../_DATA"



describe('Save Question Answer test', () => {


    it('Check correct save ', async () => {


        const result = await _saveQuestionAnswer2({ qid: "8xf0y6ziyjabvozdd253nd", answer: "optionOne", authedUser: "sarahedo" })
        expect(result).toBe(true)

    })
    it('Check incorrect save ', async () => {



        await expect(_saveQuestionAnswer2({ answer: "optionOne", authedUser: "sarahedo" })).rejects.toEqual("Please provide authedUser, qid, and answer")

    })

})