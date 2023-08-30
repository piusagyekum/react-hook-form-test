import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect } from "react"

function App() {
  const form = useForm()
  //   {
  //   defaultValues: {
  //     email: "example@1234.com",
  //   },
  // }
  const { register, control, formState, handleSubmit,watch } = form

  useEffect(() => {
    //watch returns the values of the specified field(s)

    const watchForm = watch((value) => { 
      console.log(value)
     })
  
    return () => {
      watchForm.unsubscribe
    
    }
  }, [watch])
  

  const submitFunction = (formData) => {
    console.log(formData)
    console.log("🚀 ~ file: App.jsx:13 ~ App ~ formState:", formState)
  }

  return (
    <div className="wrapper">
      <form action="" className="" noValidate onSubmit={handleSubmit(submitFunction)}>
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
            id="password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
          />
          <p className="error">{formState.errors.password?.message}</p>
        </div>

        {/* date inputs */}
        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              //Ensuring the input does not appear as a string but as a date
              valueAsDate: true,
              required: "Dob is required",
            })}
          />
          <p className="error">{formState.errors.dob?.message}</p>
        </div>
        {/* Number inputs */}
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter age"
            {...register("age", {
              //Ensuring the input does not appear as a string
              valueAsNumber: true,
              required: "Age is required",
              validate: {
                legal: (value) => value >= 18 || "You must be at least 18",
                exceeded: (value) => {
                  return value > 60 ? "You have exceeded the age limit" : false
                },
              },
            })}
          />
          <p className="error">{formState.errors.age?.message}</p>
        </div>

        <div className="form-control">
          {/* Registering nested object */}
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            placeholder="Instagram"
            {...register("socials.instagram", {
              required: "Instagram is required",
            })}
          />
          <p className="error">{formState.errors?.socials?.instagram?.message}</p>
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
            id="primary"
            placeholder="Enter Primary Phone Number"
            {...register("phoneNumbers[0]", {
              required: "Primary phone number is required",
            })}
            // TypeScript will only allow "phoneNumber.0"
          />
          <p className="error">{formState.errors.phoneNumbers?.[0]?.message}</p>
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
        {/* usefield array only works with object values */}
        <input
          type="submit"
          value="Submit"
         
        />
      </form>
      <DevTool control={control} />
      <div className=""></div>
    </div>
  )
}

export default App
