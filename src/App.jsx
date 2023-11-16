import "./App.css"

import { useForm } from "react-hook-form"

function App() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   return (
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
         <input {...register("firstName", { required: true })} />
         {errors.firstName && <p>First name is required.</p>}
         <br />
         <input {...register("lastName", { required: true })} />
         {errors.lastName && <p>Last name is required.</p>}
         <br />
         <input {...register("age", { pattern: /\d+/, required: "Please enter an age" })} />
         {errors.age && (
            <p>
               {errors.age.message !== "Please enter an age" ? "Please enter number for age." : "Please enter an age"}
            </p>
         )}
         <br />
         <input {...register("email", { pattern: /@live\.com$/, required: "Please enter an Email" })} />
         {errors.email && (
            <p>
               {errors.email.message !== "Please enter an email"
                  ? "Please enter a valid email."
                  : "Please enter an email"}
            </p>
         )}
         <br />
         <br />

         <input type="submit" />
      </form>
   )
}

export default App
