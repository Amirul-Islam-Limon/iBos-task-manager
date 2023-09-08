import { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
// import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    // const [data, setData] = useState("");
    const [signUpError, setSignUpError] = useState("");
    // const {createUserByEmailPassword, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();

    // const MySwal = withReactContent(Swal)
    const { createUserByEmailAndPass, updateUserProfile } = useContext(AuthContext);



    const handleRegister = async(data) => {        
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photo = data.photo[0];
        const bio = data.bio;
        // console.log(data);

        // saveUserToLocalStorage(name, email, bio);

        const formData = new FormData();
        formData.append("image", photo);
        const apiKey = "a6c879c944962e5dac253974ab5ec689"
        
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
        const res = await fetch(url, {
            method: "POST",
            body:formData
        });
        const imageData = await res.json();
        
        if (imageData.data.url) {
            const updateUserProfileInfo = {
                displayName: name,
                photoURL: imageData.data.url,
                bio:bio
            }
            createUserByEmailAndPass(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    updateUserProfile(updateUserProfileInfo)
                        .then(() => {
                            console.log("User Profile Updated");
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User Created Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            saveUserToLocalStorage(name, email, bio)
                            navigate("/");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                .catch(error => {
                    console.log(error.message)
                    setSignUpError(error.message)
                })
            })
        }   

    }


    const saveUserToLocalStorage = (name, email, bio) => {
        
        const userInfo = { name: name, email: email, bio: bio }
        const previousAddedUsers = JSON.parse(localStorage.getItem('task-manager-users')) || [];
        const updatedUsers = [...previousAddedUsers, userInfo];
        localStorage.setItem("task-manager-users", JSON.stringify(updatedUsers)); 
    }


    return (
        <div className='my-12 flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl font-semibold text-center'>Registration</h2>
                <form onSubmit={handleSubmit(handleRegister)}>                    
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

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Bio</span>
                    </label>
                        <textarea type="text" className={`textarea textarea-sm  textarea-bordered ${errors.bio && "border-red-400"}`} {...register('bio', { required: 'bio is required',  message: 'bio is required', }, )} />
                        {errors.email && <p className='text-red-600' role="alert">{errors.bio?.message}</p>}
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

















    