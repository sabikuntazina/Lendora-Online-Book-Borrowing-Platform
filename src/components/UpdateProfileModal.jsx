"use client"
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const UpdateProfileModal = () => {
  
     const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
       const handleSubmitFunc =async (data) => {
        await authClient.updateUser({
          image: data.photo,
          name: data.name,
        });
          document.getElementById("my_modal_5").close();
    
    }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
     <dialog id="my_modal_5" className="modal">
  <div className="modal-box">

    <h1 className="text-xl font-bold">Update Profile</h1>

    <form onSubmit={handleSubmit(handleSubmitFunc)} className="w-full space-y-3">

      <div>
        <label className="label">Name</label>
        <input
          {...register("name")}
          className="input w-full"
          placeholder="Update Your Name"
        />
      </div>

      <div>
        <label className="label">Photo URL</label>
        <input
          {...register("photo")}
          className="input w-full"
          placeholder="URL"
        />
      </div>

      <div className="flex gap-3 mt-4">
        <button
          type="button"
          className="btn btn-soft"
          onClick={() => document.getElementById("my_modal_5").close()}
        >
          Close
        </button>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>

    </form>
  </div>
</dialog>
    </div>
  );
};

export default UpdateProfileModal;
