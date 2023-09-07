import { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    // const [data, setData] = useState("");
    const [signUpError, setSignUpError] = useState("");
    // const {createUserByEmailPassword, updateUserProfile} = useContext(AuthContext)
    // const navigate = useNavigate();

    // const MySwal = withReactContent(Swal)



    const handleRegister = (data) => {
        setSignUpError("");
        
        console.log(data);
    }

    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     fetch('https://doctors-portal-server-kappa-bice.vercel.app/users', {
    //         method: "POST",
    //         headers: {
    //             "content-type":"application/json"
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCreatedUserEmail(email);  
    //     })
    // }


    // Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'User Created Successfully',
    //     showConfirmButton: false,
    //     timer: 1500
    //     })

    return (
        <div className='h-[550px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl font-semibold text-center'>Registration</h2>
                {/* <form onSubmit={handleSubmit(handleSignIn)}> */}
                <form onSubmit={""}>
                    
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                        <input type="text" className={`input input-bordered ${errors.name && "border-red-400"}`} {...register('name', { required: 'name is required', })} />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                        <input type="text" className={`input input-bordered ${errors.email && "border-red-400"}`} {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address', }, })} />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" className={`input input-bordered ${errors.password && "border-red-400"}`} {...register('password', {required: 'Password is required',pattern: {value: /^(?=.*[A-Z])(?=.*\d).{6,}$/i,message: 'Password must have at least 6 characters with 1 number and 1 uppercase letter.',},})} />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>

                    <div className="form-control">
                    <p><small className='text-xs'>Forgot password?</small></p>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                        <input type="file" className={`w-full bg-primary rounded text-white ${errors.photo && "border-red-400"}`} {...register('photo', { required: 'photo is required', })} />
                        {errors.photo && <p className='text-red-600' role="alert">{errors.photo?.message}</p>}
                    </div>
                    
                    
                    <input className='btn btn-accent w-full mt-4' type="submit" />
                </form>
                <div>
                    {signUpError && <p className='text-red-600'>{ signUpError}</p>}
                </div>
                <div className='text-center mt-3'>
                    <p className='text-center'><small>Already have an account? <Link className='text-secondary' to="/login"> Please LogIn</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={""} className='btn btn-accent-outline w-full'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

















    