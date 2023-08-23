import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

function App() {
  const form = useForm({
    defaultValues: {
      email: "example@1234.com",
    },
  })
  const { register, control, formState, reset, handleSubmit } = form

  const submitFunction = formData => {
    console.log(formData)
    reset()
  }

  return (
    <div className="wrapper">
      <form
        action=""
        className=""
        noValidate
        onSubmit={handleSubmit(submitFunction)}
      >
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter a email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid Email",
              },
            })}
          />
          <p className="error">{formState.errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            rows={2}
            placeholder="Enter password"
            {...register("password", { required: "Blog content is required" })}
          />
          <p className="error">{formState.errors.password?.message}</p>
        </div>

        <div className="form-control">
          {/* Registering nested object */}
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            placeholder="Instagram"
            {...register("socials.instagram")}
          />
          <p className="error"></p>
        </div>
        <div className="form-control">
          {/* Registering nested object */}
          <label htmlFor="snapchat">Snapchat</label>
          <input
            type="text"
            id="snapchat"
            placeholder="Snapchat.."
            {...register("socials.snapchat")}
          />
          <p className="error"></p>
        </div>
        <div className="form-control">
          {/* Registering input in array */}
          <label htmlFor="primary">Primary Phone Number</label>
          <input
            type="text"
            id="snapchat"
            placeholder="Enter Primary Phone Number"
            {...register("phoneNumbers[0]")}
            // TypeScript will only allow "phoneNumber.0"
          />
          <p className="error"></p>
        </div>
        <div className="form-control">
          {/* Registering input in array */}
          <label htmlFor="secondary">Secondary Phone Number</label>
          <input
            type="text"
            id="secondary"
            placeholder="Secondary Phone Number"
            {...register("phoneNumbers[1]")}
            // TypeScript will only allow "phoneNumber.1"
          />
          <p className="error"></p>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default App
