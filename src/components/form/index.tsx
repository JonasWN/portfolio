import React from "react"
import { StyledForm } from "./style"
//@ts-ignore
import FormIcon from "../../static/images/Form.svg"

const Form = () => {
  return (
    <StyledForm>
      <ul>
        <h1>Kontakt</h1>
        <li>
          <label htmlFor="name">Name</label>
          <input type="name" />
        </li>
        <li>
          <label htmlFor="email">E-Mail</label>
          <input type="email" />
        </li>
        <li>
          <label htmlFor="message">Sig hej!</label>
          <textarea name="message"></textarea>
        </li>
      </ul>
      <FormIcon className="form-icon" />
    </StyledForm>
  )
}

export default Form
