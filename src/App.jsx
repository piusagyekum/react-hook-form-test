import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

function App() {
  const form = useForm({
   defaultValues:{
    email:'example@1234.com'
   }
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter a email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message:'Enter a valid Email'
            },
          })}
        />
        <p className="error">{formState.errors.email?.message}</p>

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
        <input type="submit" value="Submit" />
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default App
