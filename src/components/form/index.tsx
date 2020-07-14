import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { StyledForm } from "./style"

import { useCycle, motion } from "framer-motion"

type Tform = {
  name: string
  email: string
  message: string
}

const Form = () => {
  const { handleSubmit, register, errors } = useForm()
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [x, cycleX] = useCycle(-5, -10, -15)

  const onSubmit = (values: Tform) => {
    //@ts-ignore
    fetch(process.env.MAIL_ID, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `${values.name}`,
        email: `${values.email}`,
        message: `${values.message}`,
      }),
    })
      .then(function (response) {})
      .catch(function (error) {
        console.error(error)
      })

    console.log(process.env.MAIL_ID)

    setSubmitted(true)
  }

  const handleChange = (charLength: number): void => {
    cycleX()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <h1>Kontakt</h1>
        <li>
          <label htmlFor="name">Navn</label>
          <input
            maxLength={32}
            name="name"
            onChange={(e: any) => handleChange(e.target.value.length)}
            ref={register({
              validate: value => value !== "admin" || "Nice try!",
              required: " ",
            })}
          />
          {errors.username && errors.username.message}
        </li>
        <li>
          <label htmlFor="email">E-Mail</label>
          <input
            name="email"
            maxLength={32}
            ref={register({
              required: " ",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-Mail virker ikke optimal",
              },
            })}
            onChange={(e: any) => handleChange(e.target.value.length)}
          />
          {errors.email && errors.email.message}
        </li>
        <li>
          <label htmlFor="message">Sig hej!</label>
          <textarea
            name="message"
            ref={register({
              required: " ",
            })}
            onChange={(e: any) => handleChange(e.target.value.length)}
            maxLength={255}
          ></textarea>
        </li>
      </ul>
      <input
        type="checkbox"
        name="_honeypot"
        style={{ display: "none" }}
        tabIndex={1}
        autoComplete="off"
      />
      {!submitted && <button type="submit">Send</button>}
      <svg
        width="432"
        height="480"
        viewBox="0 0 432 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320 448C319.995 452.242 318.308 456.309 315.308 459.308C312.309 462.308 308.242 463.995 304 464H32C27.7581 463.995 23.6913 462.308 20.6918 459.308C17.6924 456.309 16.005 452.242 16 448V80C16.005 75.7581 17.6924 71.6913 20.6918 68.6918C23.6913 65.6924 27.7581 64.005 32 64H69.531C66.6425 68.8939 64.8353 74.3495 64.231 80H40C37.8783 80 35.8434 80.8429 34.3431 82.3431C32.8429 83.8434 32 85.8783 32 88V440C32 442.122 32.8429 444.157 34.3431 445.657C35.8434 447.157 37.8783 448 40 448H296C298.122 448 300.157 447.157 301.657 445.657C303.157 444.157 304 442.122 304 440V288H288V400H112V344C112 341.878 111.157 339.843 109.657 338.343C108.157 336.843 106.122 336 104 336H48V96H64V104C64 106.122 64.8429 108.157 66.3431 109.657C67.8434 111.157 69.8783 112 72 112H264C266.122 112 268.157 111.157 269.657 109.657C271.157 108.157 272 106.122 272 104V96H288V152H304V88C304 85.8783 303.157 83.8434 301.657 82.3431C300.157 80.8429 298.122 80 296 80H271.766C271.162 74.3495 269.355 68.8939 266.466 64H304C308.242 64.005 312.309 65.6924 315.308 68.6918C318.308 71.6913 319.995 75.7581 320 80V128H336V80C335.99 71.516 332.616 63.3822 326.617 57.3831C320.618 51.384 312.484 48.0095 304 48H248.889C245.118 46.2353 241.093 45.0738 236.961 44.558L208 40.938V40C208 29.3913 203.786 19.2172 196.284 11.7157C188.783 4.21427 178.609 0 168 0C157.391 0 147.217 4.21427 139.716 11.7157C132.214 19.2172 128 29.3913 128 40V40.938L99.039 44.558C94.9073 45.0738 90.8823 46.2353 87.111 48H32C23.516 48.0095 15.3822 51.384 9.38311 57.3831C3.38401 63.3822 0.00952843 71.516 0 80V448C0.00952843 456.484 3.38401 464.618 9.38311 470.617C15.3822 476.616 23.516 479.99 32 480H304C312.484 479.99 320.618 476.616 326.617 470.617C332.616 464.618 335.99 456.484 336 448V264H320V448ZM48 432V363.314L98.343 413.657C99.0859 414.4 99.9678 414.989 100.938 415.391C101.909 415.793 102.949 416 104 416H288V432H48ZM96 388.687L59.313 352H96V388.687ZM101.023 60.435L136.992 55.935C138.926 55.6933 140.706 54.7536 141.996 53.2925C143.287 51.8314 143.999 49.9494 144 48V40C144 33.6348 146.529 27.5303 151.029 23.0294C155.53 18.5286 161.635 16 168 16C174.365 16 180.47 18.5286 184.971 23.0294C189.471 27.5303 192 33.6348 192 40V48C192 49.9499 192.712 51.8326 194.003 53.2944C195.293 54.7561 197.073 55.6962 199.008 55.938L234.977 60.438C240.778 61.1711 246.112 63.9933 249.982 68.3762C253.852 72.7591 255.991 78.4022 256 84.249V96H80V84.249C80.0081 78.4017 82.1473 72.7579 86.0171 68.3744C89.8869 63.9908 95.2219 61.1682 101.023 60.435Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M192 152C192 147.253 190.592 142.613 187.955 138.666C185.318 134.72 181.57 131.643 177.184 129.827C172.799 128.01 167.973 127.535 163.318 128.461C158.662 129.387 154.386 131.673 151.029 135.029C147.673 138.386 145.387 142.662 144.461 147.318C143.535 151.973 144.01 156.799 145.827 161.184C147.643 165.57 150.72 169.318 154.666 171.955C158.613 174.592 163.253 176 168 176C174.363 175.993 180.463 173.462 184.962 168.962C189.462 164.463 191.993 158.363 192 152ZM160 152C160 150.418 160.469 148.871 161.348 147.555C162.227 146.24 163.477 145.214 164.939 144.609C166.4 144.003 168.009 143.845 169.561 144.154C171.113 144.462 172.538 145.224 173.657 146.343C174.776 147.462 175.538 148.887 175.846 150.439C176.155 151.991 175.997 153.6 175.391 155.061C174.786 156.523 173.76 157.773 172.445 158.652C171.129 159.531 169.582 160 168 160C165.879 159.998 163.846 159.154 162.346 157.654C160.846 156.154 160.002 154.121 160 152Z"
          fill="url(#paint1_linear)"
        />
        <path d="M128 192H248V208H128V192Z" fill="url(#paint2_linear)" />
        <path d="M80 192H112V208H80V192Z" fill="url(#paint3_linear)" />
        <path d="M80 224H216V240H80V224Z" fill="url(#paint4_linear)" />
        <path d="M80 288H200V304H80V288Z" fill="url(#paint5_linear)" />
        <path d="M128 320H256V336H128V320Z" fill="url(#paint6_linear)" />
        <path d="M80 256H208V272H80V256Z" fill="url(#paint7_linear)" />
        <path
          d="M241.734 357.2C240.704 355.561 239.264 354.22 237.557 353.308C235.85 352.396 233.935 351.945 232 352C227.13 352 222.8 354.571 219.2 357.946C217.956 356.121 216.286 354.625 214.335 353.589C212.383 352.553 210.209 352.008 208 352C195.989 352 187.24 367.632 184.845 372.422L199.145 379.589C201.28 375.353 204.658 370.789 206.934 368.856C207.609 371.179 207.968 373.582 208 376C208 377.801 208.608 379.549 209.725 380.961C210.842 382.374 212.403 383.368 214.156 383.783C215.908 384.198 217.749 384.01 219.381 383.249C221.013 382.488 222.341 381.198 223.149 379.589C223.468 378.958 223.813 378.319 224.179 377.689C224.565 379.476 225.552 381.078 226.975 382.226C228.398 383.374 230.171 384 232 384H256V368H243.183C243.83 364.2 243.661 360.319 241.734 357.2Z"
          fill="url(#paint8_linear)"
        />
        <path d="M160 32H176V48H160V32Z" fill="url(#paint9_linear)" />
        <motion.path
          animate={{ x: x }}
          d="M419.314 144L423.03 140.284C428.727 134.53 431.914 126.755 431.893 118.658C431.873 110.562 428.648 102.802 422.923 97.0772C417.198 91.3519 409.438 88.1266 401.342 88.1065C393.245 88.0864 385.47 91.2732 379.716 96.97L234.343 242.343C233.465 243.221 232.806 244.293 232.417 245.472H232.41L216.41 293.472C215.94 294.882 215.872 296.394 216.213 297.84C216.554 299.287 217.292 300.609 218.342 301.66C219.393 302.71 220.715 303.448 222.162 303.789C223.608 304.13 225.12 304.062 226.53 303.592L274.53 287.592V287.585C275.709 287.196 276.78 286.536 277.659 285.659L408 155.314L412.686 160C413.737 161.051 414.57 162.298 415.139 163.67C415.707 165.043 416 166.514 416 168C416 169.486 415.707 170.957 415.139 172.33C414.57 173.702 413.737 174.949 412.686 176L370.343 218.343L381.657 229.657L424 187.314C426.536 184.778 428.548 181.767 429.921 178.453C431.294 175.139 432 171.587 432 168C432 164.413 431.294 160.861 429.921 157.547C428.548 154.233 426.536 151.222 424 148.686L419.314 144ZM401.373 104C404.266 104 407.094 104.858 409.499 106.465C411.905 108.072 413.78 110.357 414.887 113.029C415.994 115.702 416.284 118.643 415.719 121.481C415.155 124.318 413.762 126.924 411.716 128.97L408 132.686L387.314 112L391.03 108.284C392.385 106.921 393.997 105.841 395.772 105.106C397.548 104.37 399.451 103.995 401.373 104ZM243.5 262.811L257.189 276.5L236.649 283.347L243.5 262.811ZM272 268.687L251.313 248L320 179.314L340.686 200L272 268.687ZM352 188.687L331.314 168L376 123.314L396.686 144L352 188.687Z"
          fill="url(#paint10_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
          <linearGradient
            id="paint10_linear"
            x1="0"
            y1="0"
            x2="474.994"
            y2="407.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D529E" />
            <stop offset="0.52417" stopColor="#8C2B7A" />
            <stop offset="1" stopColor="#FF4D5A" />
          </linearGradient>
        </defs>
      </svg>
    </StyledForm>
  )
}

export default Form
