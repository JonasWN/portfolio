import React from "react"
import { StyledInfo } from "./style"
import Button from "../button"

const Info = () => {
  return (
    <StyledInfo>
      <h3>
        Hvis du synes jeg ville være et godt match for jeres team eller har
        nogle sporgsmål må du endelige bare kontakte mig.
      </h3>
      <div>
        <Button link="/kontakt" title="Kontakt" aria="Kontakt side" />
        <Button link="/cv" title="CV" aria="CV side" />
      </div>
    </StyledInfo>
  )
}

export default Info
