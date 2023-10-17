'use client'
import React from 'react'
import Link, { usePathname, useRouter } from 'next/navigation'
import './AskQuestion.css'


const AskQuestion = () => {
  const currentRoute = usePathname();
  const router=useRouter()
const user=null
  
  
  return (
    <div className='ask-questions'>
      <div className='ask-ques-container'>
      <h1>Ask a Public Question</h1>
      <form>
        <div className='ask-form-container'>
        <label htmlFor="ask-ques-title">
          <h4>Title</h4>
          <p>Be specific and imagine you’re asking a question to another person.
</p>
<input type="text" name='questionTitle' id='ask-ques-title' placeholder='e.g Is there an R function for finding the index of an element in a vector' />
        </label>
        <label htmlFor="ask-ques-body">
          <h4>What are the details of your problem?</h4>
          <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
<input type="text" name='questionTitle' id='ask-ques-body' />
        </label>
        <label htmlFor="ask-ques-tags">
          <h4>Tags</h4>
          <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
</p>
<textarea name="questionTitle" id="ask-ques-tags" cols="30" rows="10"></textarea>
        </label>


        </div>
        <input type="submit" value='Review your question' className='question-add-button'/>
      </form>

      </div>
    </div>


  )
}

export default AskQuestion