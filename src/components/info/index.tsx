import React from "react"
import { StyledInfo } from "./style"
import Button from "../button"

const Info = () => {
  return (
    <StyledInfo>
      <h3>Kontakt</h3>
      <article>
        <h4>
          Hvis du synes jeg ville være et godt match for jeres team eller har
          nogle sporgsmål må du endelige bare kontakte mig.
        </h4>
        <div>
          <Button link="/kontakt" title="Kontakt" aria="Kontakt side" />
          <Button link="/cv" title="CV" aria="CV side" />
        </div>
      </article>
    </StyledInfo>
  )
}

export default Info
